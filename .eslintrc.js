module.exports = {
  //   root: true,
  //   env: {
  //     node: true
  //   },
  //   'extends': [
  //     'plugin:vue/essential',
  //     '@vue/standard'
  //   ],
  //   "globals": {
  //     "HeyUI": true,
  //     "Utils": true,
  //     "Manba": true,
  //     "Vue": true,
  //     "R": true,
  //     "G": true,
  //     "log": true,
  //     "Model": true,
  //     "BMap": true
  //   },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'space-before-function-paren': 0,
    'no-extra-semi': 0, // 可以多余的冒号
    semi: 0, // 语句可以不需要分号结尾
    // 'comma-dangle': ["error", "always-multiline"],
    'comma-dangle': 0,
    'no-multi-spaces': 0, // 不能用多余的空格
    'no-unused-vars': [
      2,
      {
        // 允许声明未使用变量
        vars: 'local',
        // 参数不检查
        args: 'none'
      }
    ]
  }

  //   rules: {
  //     'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  //     'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  //     "semi": [
  //       "error",
  //       "always"
  //     ],
  //     "eqeqeq": "off",
  //     "linebreak-style": [
  //         "error",
  //         "unix"
  //     ],
  //     "no-useless-call": "off",
  //     "space-before-function-paren": ["error", { "anonymous": "always", "named": "never", "asyncArrow": "always" }]
  //   },
  //   parserOptions: {
  //     parser: 'babel-eslint'
  //   }
};
