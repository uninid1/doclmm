const { createApp, ref } = Vue;

const app = createApp({
  data() {
    return {
      newTodo: '',
      todos: []
    }
  },
  methods: {
    addTodo() {
      this.todos.push(this.newTodo);
      this.newTodo = '';
    },
    deleteTodo(index) {
      this.todos.splice(index, 1);
    }
  }
});

app.mount('#app');