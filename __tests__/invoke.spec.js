jest.setTimeout(90000)

const create = require('@vue/cli-test-utils/createTestProject')
const path = require('path')
const cwd = path.resolve(__dirname, '../testProject')

test('should create vuex modules', async () => {
  const project = await create('example-vuex-project', {
    plugins: {
      '@vue/cli-plugin-babel': {}
    }
  }, cwd)
  await project.run(`${require.resolve('@vue/cli/bin/vue')} add vue-cli-plugin-vuex-modules@file:../../`)
  await project.run(`${require.resolve('@vue/cli/bin/vue')} invoke vue-cli-plugin-vuex-modules`)
  expect(project.has('src/state/store.js')).toBe(true)
})
