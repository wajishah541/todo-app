module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/dist'],
  collectCoverage: true,
  verbose: true,
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.js$': 'babel-jest',
    '^.+\\.vue$': 'vue-jest'
  },
  moduleNameMapper: {
    '\\.(css|scss|less)$': '<rootDir>/test/styleMock.js'
  }
}
