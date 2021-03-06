const airbnb = require('eslint-config-airbnb/base');
const etaskrRules = {
    'eqeqeq': 2, // http://eslint.org/docs/rules/eqeqeq
    'indent': [
        2,
        4,
        {'SwitchCase': 1}
    ], // http://eslint.org/docs/rules/indent
    'max-len': [
        1,
        120
    ], // http://eslint.org/docs/rules/max-len
    'comma-dangle': 0, // http://eslint.org/docs/rules/comma-dangle
    'func-names': 0, // http://eslint.org/docs/rules/func-names (would be a nice to have)
    'no-var': 1 // http://eslint.org/docs/rules/no-var (we migrating from es5 to es6, so warn, not error)
};

// clone this so we aren't mutating a module
const eslintrc = JSON.parse(JSON.stringify(airbnb));

// manually merge in etaskr rules
Object.keys(etaskrRules).forEach(function assignRule(ruleId) {
    eslintrc.rules[ruleId] = etaskrRules[ruleId];
});

module.exports = eslintrc;
