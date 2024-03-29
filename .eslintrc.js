module.exports = {
  root: true,
  env: {
    browser: true, // browser global variables
    es2021: true, // adds all ECMAScript 2021 globals and automatically sets the ecmaVersion parser option to 12.
  },
  parserOptions: {
    ecmaVersion: 12,
  },
  plugins: ['prettier'], // ++
  rules: {
    'prettier/prettier': 'error', // ++
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
    'airbnb'
  ]
}
