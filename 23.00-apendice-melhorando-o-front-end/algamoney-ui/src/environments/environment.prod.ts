export const environment = {
  production: true,
    apiUrl: 'https://algamoney-api-dev.herokuapp.com',

    tokenWhitelistedDomains: [ 'algamoney-api-dev.herokuapp.com' ],
    tokenBlacklistedRoutes: [ new RegExp('\/oauth\/token') ]
};
