#!/usr/bin/env node

const fs = require('fs/promises');
const path = require('path');

const assign = require('object.assign');
const entries = require('object.entries');
const { ESLint } = require('eslint');

const baseConfig = require('eslint-config-airbnb');

async function convert(config) {
  const warningsOnly = assign({}, config);
  const cli = new ESLint({
    useEslintrc: false,
    baseConfig: config
  });
  const baseRules = (await cli.calculateConfigForFile(require.resolve('eslint-config-airbnb'))).rules;

  entries(baseRules).forEach((rule) => {
    const ruleName = rule[0];
    const ruleConfig = rule[1];

    if (Array.isArray(ruleConfig)) {
      warningsOnly.rules[ruleName] = ['warn'].concat(ruleConfig.slice(1));
    } else if (typeof ruleConfig === 'number') {
      warningsOnly.rules[ruleName] = 1;
    } else {
      warningsOnly.rules[ruleName] = 'warn';
    }
  });

  warningsOnly.extends = [];

  warningsOnly.plugins = [
    'import',
    'jsx-a11y',
    'react',
    'react-hooks',
  ];

  warningsOnly.settings = {
    react: {
      version: "detect",
    },
  };

  warningsOnly.parserOptions = {
    ecmaVersion: 2018,
    sourceType: 'module',
  };

  return warningsOnly;
}

(async () => {
  const config = await convert(baseConfig);

  await fs.writeFile(
    path.join(__dirname, 'index.js'),
    `module.exports = ${JSON.stringify(config, null, 2)}`,
  );
})().catch(error => {
  setTimeout(() => {
    throw error;
  });
});
