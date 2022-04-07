import cart from "./modules/cart";

export default () => ({
  state: () => ({
    count: cart.state.todos.length,
  }),

  getters: {},

  mutations: {
    increment(state) {
      state.count++;
      state.cart.todos.push({ id: state.count, text: "...", done: false });
    },
  },

  actions: {},

  modules: {
    cart,
  },
});
