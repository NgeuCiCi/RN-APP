module.exports = {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                root: ['./src'],
                extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
                alias: {
                    '@assets': './src/assets',
                    '@components': './src/components',
                    '@config': './src/config',
                    '@constants': './src/constants',
                    '@hoc': './src/hoc',
                    '@hooks': './src/hooks',
                    '@lib': './src/lib',
                    '@locale': './src/locale',
                    '@models': './src/models',
                    '@navigators': './src/navigators',
                    '@screens': './src/screens',
                    '@store': './src/store',
                    '@style': './src/style',
                    '@utils': './src/utils',
                    '@src': './src',
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
