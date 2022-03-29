import { CfnOutput, Stack, StackProps, Tags } from "aws-cdk-lib";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as s3Deploy from "aws-cdk-lib/aws-s3-deployment";
import { Construct } from "constructs";
import { BucketDeployment } from "aws-cdk-lib/aws-s3-deployment";
import { BlockPublicAccess, Bucket } from "aws-cdk-lib/aws-s3";
import { getCloudFrontDistribution } from "./cloudfront";
import { getRoute53HostedZone, getRoute53Records } from "./route53";
import { url } from "inspector";

export class CdkStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    Tags.of(scope).add("ethanabowen-website", "true");

    const WEBSITE_DOMAIN_URL = "ethanabowen.com";

    // S3 Bucket
    const bucket: Bucket = new s3.Bucket(this, "EthanABowenWebsiteBucket", {
      bucketName: "ethanabowen-website",
      publicReadAccess: false,
      blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
      websiteIndexDocument: "index.html",
    });

    // S3 Deployment
    const srcDeployment: BucketDeployment = new s3Deploy.BucketDeployment(
      this,
      "EthanABowenWebsiteBucketDeploy",
      {
        sources: [s3Deploy.Source.asset("../build")],
        destinationBucket: bucket,
      }
    );

    // Route 53 - certificate
    const { certificate, hostedZone } = getRoute53HostedZone(
      this,
      WEBSITE_DOMAIN_URL
    );

    // CloudFront
    const { distribution } = getCloudFrontDistribution(
      this,
      certificate,
      bucket,
      WEBSITE_DOMAIN_URL
    );

    // Route 53 - records
    getRoute53Records(this, distribution, hostedZone, WEBSITE_DOMAIN_URL);
  }
}
