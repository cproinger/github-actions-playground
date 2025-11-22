module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'chore', 'ci', 'dev']],
    'scope-enum': [2, 'always', [null, 'feature1', 'feature2', 'feature3']]
  }
  /*
   * explicit rules if you want to override the defaults:
   * rules: {
   * 'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'chore']],
   * 'subject-case': [0] // Disable lowercase check
   * }
   */
};