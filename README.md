If you want to reference template files in a project, compressing HTML is a very common requirement, so develop html-mini-loader for matching HTML template files are compressed.

Application method

- The configuration in the webpack.config.js file is as follows

```
module: {
rules: [{
    test: /\.html\$/,
    use: ['html-loader', 'html-mini-loader'] // html-mini-loader => html-loader => webpack
}]
}
}
```
