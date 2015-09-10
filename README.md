# Etaskr eslint config

This centralizes our coding standards config for all our projects.

To include it in a project just:

```
npm install eslint@^1.3.1 --save-dev
npm install babel-eslint@^4.1.1 --save-dev
npm install git+ssh://git@bitbucket.org:etaskr/eslint-config-etaskr.git#master --save-dev
```

Then add the following `.eslintrc` file to your root directory:

```
{
  "extends": "etaskr"
}
```

You can install an eslint Sublime plugin by following: https://github.com/roadhump/SublimeLinter-eslint. This will
highlight all the code style errors and warnings within Sublime.
