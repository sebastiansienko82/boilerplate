module.exports = {
    'testMatch': [
        '**/__tests__/**/?(*.)+(spec|test).+(ts|tsx|js)'
    ],
    'moduleNameMapper': {
        '\\.(css|scss)$': '<rootDir>/client/__mocks__/styleMock.ts'
    },
    'setupFilesAfterEnv': ['<rootDir>/client/setupTests.ts'],
    'transform': {
        '^.+\\.(ts|tsx)$': 'ts-jest'
    },
    'testTimeout': 8000
};
