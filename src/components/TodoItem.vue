<template>
  <li class="list">
    <input 
      type="checkbox" 
      :checked="todo.completedAt !== null" 
      @change="toggleComplete"
    />
    <span class="task">{{ todo.name }}</span>
  </li>
</template>

<script>
import { useTodoStore } from '../stores/todo';

export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  setup() {
    const store = useTodoStore();
    return { store };
  },
  methods: {
    toggleComplete() {
      console.log('Toggling task:', this.todo.id);
      this.store.toggleStatus(this.todo.id);
    }
  }
}
</script>
