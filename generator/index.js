module.exports = api => {
  api.injectImports(`src/main.js`, `import store from './store'`)
  api.injectRootOptions(`src/main.js`, `store`)
  api.extendPackage({
    dependencies: {
      vuex: '^3.0.1'
    }
  })
  api.render('./template')
}
