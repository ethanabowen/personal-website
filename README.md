# Resume Website
SPA with my career education, experience, skillsets, projects, and certifications.

https://ethanabowen.com


## Tech Stack (processing)
* AWS
  * Kinesis Video Stream - serverless Kinesis solution
  * Cognito
    * Cognito Social IDP (Google)
    * Cognito Federated Auth flow
  * CDK - website and some infrastructure management
  * DynamoDB - user access table
  * Lambda - User CRUD and DynamoDB interations
  * API Gateway - Rest API for User CRUD
* GCP
  * OAuth2 Client


:rocket: **Future**

* Complete CDK rest of backend (KVS, Cognito, Rest APIs, and Lambdas).


# Lessons Learned
* Amplify (deprecated, removed from project)
  * Amplify is nice for demos, but difficult to work with and integrate into AWS SDK services.
  * Amplify doesn't give ALL the controls of the services it provides.  With limit service settings, I found I had to edit the services manually (or IAM Roles) which is now NOT covered in the Cloud Formation document/stacks.
* CDK is awesome!