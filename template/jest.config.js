module.exports = {
    preset: 'react-native',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    snapshotSerializers: ['enzyme-to-json/serializer'],
    setupFilesAfterEnv: ['<rootDir>/test-setup.js'],
    collectCoverage: true,
    coverageReporters: ['json', 'html', 'text'],
    reporters: [
        'default',
        [
            'jest-junit',
            {
                outputDirectory: './coverage/',
            },
        ],
    ],
};
