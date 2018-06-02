import state from './state'
import mutations from './mutations'
import actions from './actions'

const module = {
  namespaced: true,
  state,
  actions,
  mutations
}

export default module
