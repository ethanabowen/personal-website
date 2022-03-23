export const config = {
    cognito: {
        region: process.env.REACT_APP_COGNITO_REGION,
        userPoolId: process.env.REACT_APP_COGNITO_USER_POOL_ID,
        appClientId: process.env.REACT_APP_COGNITO_APP_CLIENT_ID,
        scopes: ['email', 'openid', 'profile'],
        domainUrl: process.env.REACT_APP_COGNITO_DOMAIN_URL,
        redirectSignInUrl: process.env.REACT_APP_COGNITO_REDIRECT_SIGNIN_URL,
        redirectSignOutUrl: process.env.REACT_APP_COGNITO_REDIRECT_SIGNOUT_URL
    }
}