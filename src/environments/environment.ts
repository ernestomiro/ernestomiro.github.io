export const environment = {
  production: true,
  bcpp: {
    enabled: false,
    apiBaseUrl: '',
    protectedPaths: ['/api/protected-test/echo'],
  },
} as const;
