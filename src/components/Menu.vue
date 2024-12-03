<template>
    <div class="menu">
        <h1 class="quicksand-regular">{{ title }}</h1>
        <div class="navs">
            <p @click="setCurrNav('All')">All</p>
            <template v-for="nav in navList">
                <p @click.prevent="setCurrNav(nav)" :class="[activeTab === nav ? 'Inter-bold' : 'Inter-regular']">
                    {{nav}}
                </p>
            </template>
        </div>
    </div>
    </template>
    <script>
    import { useProductStore } from '@/stores/product';
    export default {
        setup() {
            const store = useProductStore()
            return {
                store
            }
        },
        props: {
            navList: Array,
            title: String,
        },
        data() {
            return {
                activeTab: "All",
                navs: this.navList
            }
        },
        methods: {
            setCurrNav(nav) {
                this.activeTab = nav
                this.$emit("change-nav", nav)
            }
        },
        computed: {
            coolList() {
                const newList = [...this.navs]
                newList.unshift("All")
                return newList
            }
        },
    }
    </script>
    <style scoped>
    /* Lato font */
    @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
    /* Quicksand font */
    @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
    /* Montserat */
    @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
    .quicksand-regular {
        font-family: "Inter", sans-serif;
        font-optical-sizing: auto;
        font-weight: 700;
        font-style: normal;
    }
    .Inter-bold {
        font-family: "Inter", sans-serif;
        font-weight: 900;
        font-style: normal;
    }
    .Inter-regular {
        font-family: "Inter", sans-serif;
        font-weight: 400;
        font-style: normal;
    }
    .menu {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 16px 0 16px;
    }
    .menu > .navs {
        display: flex;
        column-gap: 20px;
    }
    .navs > p {
        cursor: pointer;
    }
    </style>