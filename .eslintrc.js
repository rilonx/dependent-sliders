module.exports = {
  "extends": [
    "plugin:flowtype/recommended",
    "angular"
  ],
  "plugins": [
    "flowtype",
    "angular"
  ],
  "env": {
    "es6": true,
    "browser": true
  },
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": 6,
    "ecmaFeatures": {
      "modules": true,
      "arrowFunctions": true,
      "blockBindings": true,
      "destructuring": true,
      "classes": true,
      "experimentalObjectRestSpread": true
    },
    "allowImportExportEverywhere": false
  }
};