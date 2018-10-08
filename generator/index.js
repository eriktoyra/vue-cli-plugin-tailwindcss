module.exports = (api, options) => {
  api.injectImports(api.entryFile, `import './assets/css/tailwind.css'`);
  api.render('./template')
}