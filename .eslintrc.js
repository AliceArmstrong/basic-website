// var OFF = 0, WARN = 1, ERROR = 2;

module.exports = exports = {
    "env": {
        "es6": true
    },

    "indent": ["error", 4],

    "ecmaFeatures": {
        "modules": true,
        "jsx": true
    },

    "plugins": ["react"],

    "extends": [
      "eslint:recommended",
      "plugin:react/recommended",
      "airbnb"
    ]
};
