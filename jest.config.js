module.exports = {
    roots: ['<rootDir>/src'],
    collectCoverageFrom: [
        '<rootDir>/src/**/*.{ts,tsx}'
    ],
    coverageDirectory: 'coerage',
    testEnviroment: 'node',
    transform: {
        '.+\\.ts$': 'ts-jest'
    }
}