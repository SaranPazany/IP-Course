<template>
    <div>
        <h1>Popular Products</h1>
        <ul>
            <li v-for="product in popularProducts" :key="product.id">{{ product.name }}</li>
        </ul>
        <h2>Categories in {{ currentGroupName }}</h2>
        <ul>
            <li v-for="category in categories" :key="category.id">{{ category.name }}</li>
        </ul>
    </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { useProductStore } from '@/stores/product';
import { mapState } from 'pinia';

export default {
    data() {
        return {
            currentGroupName: 'Group A',
        };
    },
    computed: {
        ...mapState(useProductStore, {
            popularProducts: 'getPopularProducts',
            categories(store) {
                return store.getCategoriesByGroup(this.currentGroupName);
            },
        }),
    },
    async mounted() {
        const store = useProductStore();
        await store.fetchProducts(); 
        await store.fetchCategories(); 
    },
};
</script> 