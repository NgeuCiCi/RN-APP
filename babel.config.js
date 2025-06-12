module.exports = {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                root: ['./src'],
                extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
                alias: {
                    '@': './src',
                },
            },
        ],
        [
            'module:react-native-dotenv',
            {
                moduleName: '@env',
                path: process.env.ENVFILE || '.env',
                blacklist: null,
                whitelist: null,
                safe: false,
                allowUndefined: true,
            },
        ],
        'react-native-reanimated/plugin',
    ],
};
