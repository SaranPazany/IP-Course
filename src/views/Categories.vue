<template>
    <div class="category-list">
        <Category
            v-for="(category, index) in categories"
            :key="index"
            :name="category.name"
            :productCount="category.productCount"
            :image="category.image"
            :color="category.color"
        />
    </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { useProductStore } from "@/stores/product";
import Category from '@/components/Category.vue';

export default {
    components: {
        Category,
    },
    setup() {
        const store = useProductStore();
        
        const categories = computed(() => store.categories);

        onMounted(async () => {
            await store.fetchCategories();
            console.log("Categories in component:", categories.value);
        });

        return {
            categories
        };
    }
};
</script>