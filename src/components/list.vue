<template>
  <div v-if="todos">
    <table border="1">
      <thead>
        <tr>
          <th>title</th>
          <th>completed</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="todo in todos" :key="todo.id">
          <td>
            {{ todo.title }}
          </td>
          <td>
            {{ todo.completed }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "VList",
  props: {
    todos: {
      type: Array,
      default: null,
    },
  },
};
</script>
