export const environment = {
  production: true,
  // apiUrl: 'https://algamoney-api-dev.herokuapp.com',

  // tokenWhitelistedDomains: [ 'algamoney-api-dev.herokuapp.com' ],
  // tokenBlacklistedRoutes: [ new RegExp('\/oauth\/token') ]

  apiUrl: 'http://localhost:8080',

  tokenWhitelistedDomains: [ 'localhost:8080' ],
  tokenBlacklistedRoutes: [ new RegExp('\/oauth\/token') ]
};
