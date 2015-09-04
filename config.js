System.config({
    baseURL: '.',
    transpiler: 'babel',
    babelOptions: {
      "optional": [
        "optimisation.modules.system"
      ]
    },
    paths: {
      "npm:*": "node_modules/*"
    },
    map: {
        'babel': 'npm:babel-core/browser.js',
        'babel/external-helpers': 'npm:babel-core/external-helpers.js',
        'fetch': 'npm:whatwg-fetch/fetch.js',
        'redux': 'npm:redux/dist/redux.js',
        'redux-logger': 'npm:redux-logger/build/index.js',
        'redux-logger': 'npm:redux-logger/build/createLogger.js',
        'redux-thunk': 'npm:redux-thunk/lib/index.js',
        'react': 'npm:react/dist/react.js',
        'react-dom': 'npm:react/dist/react.js',
        'react-redux': 'npm:react-redux/dist/react-redux.js'
    }
});
