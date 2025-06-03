<template>
  <ul class="todoLists">
    <TodoItem 
      v-for="todo in filteredTodos" 
      :key="todo.id" 
      :todo="todo" 
    />
  </ul>
</template>

<script>
import { computed } from 'vue';
import { useTodoStore } from '../stores/todo';
import TodoItem from './TodoItem.vue';

export default {
  components: {
    TodoItem
  },
  props: {
    status: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const store = useTodoStore();
    
    const filteredTodos = computed(() => {
      if (props.status === 'completed') {
        return store.todos.filter(todo => todo.completedAt !== null);
      } else {
        return store.todos.filter(todo => todo.completedAt === null);
      }
    });
    
    return { filteredTodos };
  }
}
</script>
