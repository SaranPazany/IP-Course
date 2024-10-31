<template>
   <button :style="{ backgroundColor: bgBtnColor }" @click="HandleClick ">{{ label }}<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
</svg>
</button>

</template>


<script>  
export default{
    props:{
        bgBtnColor: String,
        label: String,
    },

    methods:{
        HandleClick(){
            alert("Redirecting to shopping...");
        }
    }

}


</script>

<style scoped>

button {
  width: 50%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
 justify-items: center;
  padding: 8px 16px;
  color: rgb(35, 199, 38);
  /* background-color: #36b37e; */
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

</style>