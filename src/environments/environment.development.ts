export const environment = {
  production: false,
  bcpp: {
    enabled: true,
    apiBaseUrl: 'https://localhost:7088',
    protectedPaths: ['/api/protected-test/echo'],
  },
} as const;
