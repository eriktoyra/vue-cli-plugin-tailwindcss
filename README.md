# vue-cli-plugin-tailwindcss

The plugin adds [Tailwind CSS](https://tailwindcss.com/) to your [Vue CLI 3.x](https://cli.vuejs.org/) project.

## What it does

The following files will be generated in the root of your project:

- `postcss.config.js`
- `tailwind.config.js`

It also generates the `tailwind.css` file in your project's `./src/assets/css` directory.

It adds `"tailwindcss"` as a `devDependency` to your project's `package.json`.

Finally, it injects the line `import '@/assets/css/tailwind.css'` to your projects entry file (usually `main.js`) so that Webpack may pick up the Tailwind CSS file for further processing with PostCSS.

## How to use

```
vue add @eriktoyra/tailwindcss
```

## Troubleshooting

This plugin uses the `postcss.config.js` file to configure PostCSS. Should your project already have the PostCSS configuration setup in either `package.json` or `.postcssrc`, you will need to decide where to put your PostCSS configuration.

Wherever you decide to put the PostCSS configuration, you must make sure to require Tailwind CSS before Autoprefixer, just like in the example below.

```javascript
module.exports = {
  plugins: [
    require('tailwindcss')('tailwind.config.js'),
    require('autoprefixer')()
  ]
}
```
