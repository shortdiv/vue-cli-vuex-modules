jest.setTimeout(20000)

const create = require('@vue/cli-test-utils/createTestProject')
const path = require('path')
const cwd = path.resolve(__dirname, '../testProject')

async function createAndInstall (name) {
  const project = await create(name, {
    plugins: {
      '@vue/cli-plugin-babel': {},
      'vue-cli-plugin-vuex-modules': {}
    }
  }, cwd)
  // mock install
  // const pkg = JSON.parse(await project.read('package.json'))
  // pkg.devDependencies['vue-cli-plugin-vuex-modules'] = 'file:../../'
  // await project.write('package.json', JSON.stringify(pkg, null, 2)).catch(err => {console.log(err)})
  return project
}

describe('invoke', () => {
  test('should create vuex modules', async () => {
    const project = await createAndInstall(`example-vuex-project`)
    //await project.run(`${require.resolve('@vue/cli/bin/vue')} invoke vue-cli-plugin-vuex-modules`)
    expect(project.has('src/state/store.js')).toBe(true)
  })
})
