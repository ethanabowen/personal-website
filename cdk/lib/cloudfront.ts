import * as cloudfront from "aws-cdk-lib/aws-cloudfront";
import { Construct } from "constructs";
import {
  CfnDistribution,
  OriginAccessIdentity,
  ViewerCertificate,
} from "aws-cdk-lib/aws-cloudfront";
import { Bucket } from "aws-cdk-lib/aws-s3";
import { ICertificate } from "aws-cdk-lib/aws-certificatemanager";

// CloudFront

/**
 * Create CloudFront distribution based pointing to private S3 bucket
 * Redirect to index.html on error for Single Page Application routing
 * @param scope Stack context
 * @param certificate SSL cert
 * @param bucket S3 bucket
 * @param url domain url
 * @returns 
 */
export const getCloudFrontDistribution = (
  scope: Construct,
  certificate: ICertificate,
  bucket: Bucket,
  url: string
) => {
  const oai = new OriginAccessIdentity(scope, "PersonalWebsiteOAI");
  bucket.grantRead(oai);

  const originConfigs = {
    s3OriginSource: {
      s3BucketSource: bucket,
      originAccessIdentity: oai,
    },
    behaviors: [{ isDefaultBehavior: true }],
  };

  const errorConfigurations: CfnDistribution.CustomErrorResponseProperty[] = [
    {
      errorCode: 403,
      responsePagePath: "/",
      responseCode: 200,
    },
    {
      errorCode: 404,
      responsePagePath: "/index.html",
      responseCode: 200,
    },
  ];

  const viewerCertificate = ViewerCertificate.fromAcmCertificate(certificate, {
    aliases:[url]
  })
  const distribution = new cloudfront.CloudFrontWebDistribution(
    scope,
    "EthanABowenWebsiteCFD",
    {
      originConfigs: [originConfigs],
      errorConfigurations,
      viewerCertificate //http or https, custom domain
    }
  );

  return { oai, distribution };
};
