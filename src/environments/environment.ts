export const environment = {
  production: true,
  bcpp: {
    enabled: false,
    apiBaseUrl: '',
    protectedPaths: ['/api/contact-messages'],
  },
} as const;
