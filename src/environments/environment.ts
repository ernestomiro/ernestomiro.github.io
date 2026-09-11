export const environment = {
  production: true,
  bcpp: {
    enabled: true,
    apiBaseUrl:
      'https://portafolio-api-ckhvfqa0fsadaga9.mexicocentral-01.azurewebsites.net',
    protectedPaths: ['/api/contact-messages', '/api/admin/session/login', '/api/admin/session/logout'],
    protectedPrefixes: ['/api/admin/messages'],
  },
} as const;
