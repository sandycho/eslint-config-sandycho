module.exports = {
  rules: {
    'vue/comma-dangle': ['error', 'always-multiline'],
    'vue/no-v-html': 0,
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'all',
        singleQuote: true,
        printWidth: 80,
        jsxBracketSameLine: true,
        htmlWhitespaceSensitivity: 'strict',
        endOfLine: 'lf',
      },
    ],
    extends: 'sandycho/lib/ci/common',
  },
};