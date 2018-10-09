module.exports = (api, options) => {
  // Modify package.json fields
  api.extendPackage({
    devDependencies: {
      "tailwindcss": "^0.6.6",
    }
  })

  // Inject Tailwind into the main.js file
  api.injectImports(api.entryFile, `import '@/assets/css/tailwind.css'`);

  // Copy and render all files in ./template
  api.render('./template')
}