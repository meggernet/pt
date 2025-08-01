module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  collectCoverage: true,
  collectCoverageFrom: ["<rootDir>/src/**"],
  coverageDirectory: "<rootDir>/.reports/jest/",
  coverageReporters: ["clover", "json", "json-summary", "lcov", "text"],
  coveragePathIgnorePatterns: ["src/main.ts"],
};
