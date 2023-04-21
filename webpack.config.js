const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const PATHS = {
    source: path.join(__dirname, 'node_modules', '@docsearch'),
    target: path.join(__dirname, 'assets', 'mods', 'docsearch')
}

module.exports = {
    mode: 'production',
    entry: {},
    plugins: [
        new CopyPlugin({
            patterns: [
                // css
                { from: path.join(PATHS.source, 'css/dist/style.css'), to: path.join(PATHS.target, 'index.css') },
                // js
                { from: path.join(PATHS.source, 'js/dist/umd/index.js'), to: path.join(PATHS.target, 'index.js') },
            ],
        }),
    ]
};
