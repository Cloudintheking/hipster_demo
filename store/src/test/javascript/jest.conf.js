module.exports = {
  coverageDirectory: '<rootDir>/target/test-results/',
  coveragePathIgnorePatterns: ['<rootDir>/src/test/javascript', '<rootDir>/src/main/webapp/app/router'],
  moduleFileExtensions: ['js', 'json', 'ts', 'vue'],
  transform: {
    '.*\\.(vue)$': 'vue-jest',
    '^.+\\.tsx?$': 'ts-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/main/webapp/app/$1'
  },
  reporters: ['default', ['jest-junit', { output: './target/test-results/TESTS-results-jest.xml' }]],
  testResultsProcessor: 'jest-sonar-reporter',
  testMatch: ['<rootDir>/src/test/javascript/spec/**/+(*.)+(spec.ts)'],
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  rootDir: '../../../',
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 60,
      functions: 70,
      lines: 80
    }
  }
};
