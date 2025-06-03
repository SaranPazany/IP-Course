import { defineStore } from "pinia";
import axios from "axios";

export const useTodoStore = defineStore("todo", {
  state: () => ({
    todos: [],
  }),
  getters: {
    countTodos: (state) => state.todos.filter(todo => todo.completedAt === null).length,
  },
  actions: {
    async fetchTodos() {
      try {
        const response = await axios.get("http://localhost:3100/tasks");
        this.todos = response.data;
      } catch (error) {
        console.error("Failed to fetch todos:", error);
      }
    },
    async addTodo(todo) {
      try {
        // You may need to provide userId and description as required by your backend
        const response = await axios.post("http://localhost:3100/tasks", {
          name: todo,
          description: "description",
          userId: 1, // Replace with actual user id
        });
        this.todos.push(response.data);
      } catch (error) {
        console.error("Failed to add todo:", error);
      }
    },
    async toggleStatus(id) {
      try {
        const todo = this.todos.find((t) => t.id == id);
        if (!todo) {
          console.error("Todo not found:", id);
          return;
        }

        console.log("Toggling todo:", todo);

        // Create a new Date object for immediate visual feedback
        const newStatus = todo.completedAt ? null : new Date();
        
        // Update local state first for responsive UI
        const originalStatus = todo.completedAt;
        todo.completedAt = newStatus;
        
        try {
          const endpoint = newStatus ? 'done' : 'pending';
          const response = await axios.patch(
            `http://localhost:3100/tasks/${id}/${endpoint}`
          );
          
          console.log(`API response (${endpoint}):`, response.data);
          
          // Update with server response data
          Object.assign(todo, response.data);
        } catch (error) {
          // Revert the local state on API failure
          console.error("API request failed:", error);
          todo.completedAt = originalStatus;
          throw error;
        }
      } catch (error) {
        console.error("Failed to toggle status:", error);
      }
    },
    async clearAll() {
      try {
        // Delete all tasks one by one (or implement a bulk delete endpoint in backend)
        await Promise.all(
          this.todos.map((todo) =>
            axios.delete(`http://localhost:3100/tasks/${todo.id}`)
          )
        );
        this.todos = [];
      } catch (error) {
        console.error("Failed to clear todos:", error);
      }
    },
  },
});
