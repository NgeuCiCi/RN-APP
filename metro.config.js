const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const path = require('path');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
    transformer: {
        getTransformOptions: async () => ({
            transform: {
                experimentalImportSupport: false,
                inlineRequires: true,
            },
        }),
    },
    resolver: {
        extraNodeModules: {
            'react-native': path.resolve(__dirname, 'node_modules/react-native'),
        },
    },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
