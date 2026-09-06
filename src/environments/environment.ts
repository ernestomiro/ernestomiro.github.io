export const environment = {
  production: true,
  bcpp: {
    enabled: true,
    apiBaseUrl:
      'https://portafolio-api-ckhvfqa0fsadaga9.mexicocentral-01.azurewebsites.net',
    protectedPaths: ['/api/contact-messages'],
  },
} as const;
