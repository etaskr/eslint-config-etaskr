# Etaskr eslint config

This centralizes our coding standards config for all our projects.

To include it in a project just:

```
npm install git+ssh://git@bitbucket.org:etaskr/etaskr-eslint-config.git#master --save-dev
```

Then add the following `.eslintrc` file to your root directory:

```
{
  "extends": "./node_modules/etaskr/etaskr-eslint-config/.eslintrc"
}
```