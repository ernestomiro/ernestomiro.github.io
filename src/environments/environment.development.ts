export const environment = {
  production: false,
  bcpp: {
    enabled: true,
    apiBaseUrl: 'https://localhost:7088',
    protectedPaths: ['/api/contact-messages', '/api/admin/session/login', '/api/admin/session/logout'],
    protectedPrefixes: ['/api/admin/messages'],
  },
} as const;
