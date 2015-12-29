# Etaskr eslint config

This is a **PUBLIC** repo intended to help keep our code consistent with eslint style checking. This library inherits from 
airbnb's style guide: https://github.com/airbnb/javascript

To include it in a project just:

```
npm install eslint@^1.3.1 --save-dev
npm install babel-eslint@^4.1.1 --save-dev
npm install eslint-config-etaskr --save-dev
```

Then add the following `.eslintrc` file to your root directory:

```
{
  "extends": "etaskr"
}
```

You can install an eslint Sublime plugin by following: https://github.com/roadhump/SublimeLinter-eslint. This will
highlight all the code style errors and warnings within Sublime.
