/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true,
  coverageThreshold: {
    global: {
      branches: 93,
      functions: 98,
      lines: 90,
      statements: 90,
    },
  },
};
