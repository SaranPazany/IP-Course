import { defineStore } from "pinia";
import axios from "axios";

export const useUserStore = defineStore("user", {
  state: () => ({
    users: [],
    selectedUser: null,
  }),
  actions: {
    async fetchUsers() {
      try {
        const res = await axios.get("http://localhost:3100/users");
        this.users = res.data;
      } catch (err) {
        console.error("Failed to fetch users:", err);
      }
    },
    async fetchUserById(id) {
      try {
        const res = await axios.get(`http://localhost:3100/users/${id}`);
        this.selectedUser = res.data;
      } catch (err) {
        console.error("Failed to fetch user:", err);
      }
    },
    async fetchUserByUsername(username) {
      try {
        const res = await axios.get(
          `http://localhost:3100/users/username/${username}`
        );
        this.selectedUser = res.data;
      } catch (err) {
        console.error("Failed to fetch user by username:", err);
      }
    },
    async addUser(user) {
      try {
        const res = await axios.post("http://localhost:3100/users", user);
        this.users.push(res.data);
      } catch (err) {
        console.error("Failed to add user:", err);
      }
    },
    async updateUser(id, data) {
      try {
        const res = await axios.patch(
          `http://localhost:3100/users/${id}`,
          data
        );
        const idx = this.users.findIndex((u) => u.id === id);
        if (idx !== -1) this.users[idx] = res.data;
      } catch (err) {
        console.error("Failed to update user:", err);
      }
    },
    async deleteUser(id) {
      try {
        await axios.delete(`http://localhost:3100/users/${id}`);
        this.users = this.users.filter((u) => u.id !== id);
      } catch (err) {
        console.error("Failed to delete user:", err);
      }
    },
  },
});
