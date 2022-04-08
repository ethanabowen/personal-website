import { Construct } from "constructs";
import { IDistribution } from "aws-cdk-lib/aws-cloudfront";
import {
  ARecord,
  HostedZone,
  IHostedZone,
  RecordTarget,
} from "aws-cdk-lib/aws-route53";
import {
  CertificateValidation,
  DnsValidatedCertificate,
} from "aws-cdk-lib/aws-certificatemanager";
import { CloudFrontTarget } from "aws-cdk-lib/aws-route53-targets";
import { HttpsRedirect } from "aws-cdk-lib/aws-route53-patterns";

// Route 53 -

/**
 * Gets the existing hosted zone (manually created),
 * creates a new SSL cert, and validates using DNS validation
 * @param scope Stack context
 * @param url domain
 * @returns
 */
export const getRoute53HostedZone = (scope: Construct, url: string) => {
  const hostedZone = HostedZone.fromLookup(scope, "EthanABowenWebsiteHostedZone", {
    domainName: url,
  });

  const certificate = new DnsValidatedCertificate(scope, "EthanABowenWebsiteCertificate", {
    hostedZone,
    domainName: url,
    region: "us-east-1",
    validation: CertificateValidation.fromDns(hostedZone),
  });

  return { hostedZone, certificate };
};

/**
 * Creates A Record and HttpsRedirect for given url
 * @param scope Stack context
 * @param distribution CloudFront distribution
 * @param hostedZone zone of domain
 * @param url domain
 */
export const getRoute53Records = (
  scope: Construct,
  distribution: IDistribution,
  hostedZone: IHostedZone,
  url: string
) => {
  new ARecord(scope, "EthanABowenWebsiteAlias", {
    zone: hostedZone,
    recordName: url,
    target: RecordTarget.fromAlias(new CloudFrontTarget(distribution)),
  });

  // TODO: revisit www redirect with Cogito and Google auth
  // new HttpsRedirect(scope, "EthanABowenWebsiteHttpsRedirect", {
  //   zone: hostedZone,
  //   recordNames: [`www.${url}`],
  //   targetDomain: distribution.distributionDomainName,
  // });
};
