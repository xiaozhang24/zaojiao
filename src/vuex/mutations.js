const mutations = {
  setUsers(state, users) {
    state.users = users
  },
  setLoading(state, flag) {
    state.isLoading = flag
  },
  setLogin(state, data) {
  	state.isLogin = data
  }
}

export default mutations