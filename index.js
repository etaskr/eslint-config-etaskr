const airbnb = require('eslint-config-airbnb/base');
const etaskrRules = require('./rules');

// clone this so we aren't mutating a module
const eslintrc = JSON.parse(JSON.stringify(airbnb));

// manually merge in etaskr rules
Object.keys(etaskrRules).forEach(function assignRule(ruleId) {
    eslintrc.rules[ruleId] = etaskrRules[ruleId];
});

module.exports = eslintrc;
