<template>
  <div>
    <h1>About</h1>
    <v-list :todos="todos" />
  </div>
</template>

<script>
import VList from "components/list.vue";
export default {
  name: "PageAbout",
  components: {
    VList,
  },
  data() {
    return {
      todos: [],
    };
  },
  mounted() {
    this.$axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then(({ data }) => {
        this.todos = data;
      });
  },
};
</script>

<style lang="scss" scoped>
h1 {
  color: blue;
}
</style>
