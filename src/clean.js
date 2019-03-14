import CleanWebpackPlugin from "clean-webpack-plugin";

new CleanWebpackPlugin({
    dry: true,

    verbose: true,

    cleanStaleWebpackAssets: false,

    protectWebpackAssets: false,

    cleanOnceBeforeBuildPatterns: ['**/*', '!static-files*'],
    cleanOnceBeforeBuildPatterns: [],

    cleanAfterEveryBuildPatterns: ['static*.*', '!static1.js'],

    dangerouslyAllowCleanPatternsOutsideProject: true,

    dry: true,
})