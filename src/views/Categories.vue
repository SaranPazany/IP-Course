<template>
    <div class="product-list">
        <Category
        v-for = "(product, index) in products"
            :key = "index"
            :name = 'product.name'
            :productCount = "product.productCount"
            :image = "product.image"
            :color = "product.color"
        />

    </div>
</template>

<script>
import axios from "axios";
import Category from '@/components/Category.vue';

    export default {
        components: {
            Category,
        },

        data () {
            return {
                products: [],
            };
        },
        methods: {
            fetchProducts() {
        axios
        .get("http://localhost:3000/api/categories")
        .then((response) => {
          console.log(response.data); // Access the data

            this.products = response.data;
            })
        .catch((error) => {
            console.error("Error fetching data:", error);
            });
        },
    },
        async mounted() {
        this.fetchProducts();
    },
};
</script>

<style scoped>

.product-list {
    display: flex;
    flex-wrap: wrap;
    width: 100vw;
}

.category-img {
    width: 90px;
    height: 90px;
    object-fit: cover;
    margin-bottom: 8px;
}


</style>