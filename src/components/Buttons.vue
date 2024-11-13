<template>
    <button :style="{ backgroundColor: buttonColor }">
        {{ label }}
    </button>
</template>

<script>
export default {
    props: {
        buttonColor: {
            type: String,
            required: true
        },
        label: {
            type: String,
            required: true
        }
    }
};

</script>

<style scoped>
/* button {
    width: 55%;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    justify-content: center;
    padding: 8px 16px;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
} */
</style>