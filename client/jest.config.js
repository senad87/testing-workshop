// ./client/jest.config.js
module.exports = {
  displayName: 'client',
  testEnvironmentOptions: {
    url: 'https://til.test.com',
  },
  testPathIgnorePatterns: ['/node_modules/', '/helpers/'],
  setupFiles: ['<rootDir>/test/setup-test-framework.js'],
  modulePaths: ['<rootDir>/src', '<rootDir>/test'],
  moduleNameMapper: {
    '\\.svg$': '<rootDir>/test/svg-file-mock.js',
  },
}
