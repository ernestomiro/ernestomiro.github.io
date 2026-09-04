export const environment = {
  production: false,
  bcpp: {
    enabled: true,
    apiBaseUrl: 'https://localhost:7088',
    protectedPaths: ['/api/contact-messages'],
  },
} as const;
