import { useEffect, useState } from "react";
import { Amplify, Auth } from "aws-amplify";
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth";
import { config } from "./config";

// one time configuration for authentication
if (!Amplify.Auth.userPool) {
  /*Amplify.configure(
        {
            Storage: {
                bucket: 'bowen-storage',
                region: 'us-east-1',
            }
        }
    )*/

  Amplify.configure({
    identityPoolId: "us-east-1:d6138054-1ae1-4d80-9921-cce8229a09ab",
    region: config.cognito.region,
    authenticationFlowType: "USER_SRP_AUTH", //srp is safer compared to PASS AUTH
    userPoolId: config.cognito.userPoolId,
    userPoolWebClientId: config.cognito.appClientId,
    oauth: {
      domain: config.cognito.domainUrl,
      scope: config.cognito.scopes,
      redirectSignIn: config.cognito.redirectSignInUrl,
      redirectSignOut: config.cognito.redirectSignOutUrl,
      responseType: "code", // REFRESH token generated with 'code'
    },
  });
}

/* Security page is locked down to a very specific set of allowed users with backend logic */
export default function WebsiteAuth(props: any) {
  const [cognitoUser, setCognitoUser] = useState();

  // Only using this approach to trigger a re-render
  // for when Amplify initializes
  useEffect(() => {
    Auth.currentAuthenticatedUser().then(
      (cognitoUser) => {
        if (!cognitoUser) {
          console.log("federated sign in")
          Auth.federatedSignIn({
            provider: CognitoHostedUIIdentityProvider.Google,
          }); //redirects to Google sign in
        } else {
          console.log("set cognito user")
          setCognitoUser(cognitoUser);
        }
      },
      (error) => {
        console.log(error);
        console.log("federated sign in")
        Auth.federatedSignIn({
          provider: CognitoHostedUIIdentityProvider.Google,
        }); //redirects to Google sign in
      }
    );
  }, []);

  return <>{!cognitoUser ? <div>Redirecting...</div> : props.children}</>;
}
