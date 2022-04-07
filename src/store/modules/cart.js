const state = {
  todos: [
    { id: 1, text: "...", done: true },
    { id: 2, text: "...", done: false },
  ],
};

const getters = {
  doneTodos: (state) => {
    return state.todos.filter((todo) => todo.done);
  },
};

const mutations = {
  changeTodos(state, val) {
    state.todos = val;
  },
};

const actions = {
  checkout({ commit, state }, todos) {
    commit("changeTodos", todos);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
