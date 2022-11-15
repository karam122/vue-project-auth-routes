<template>
    <div :style="{marginTop:'40px',display:'flex',justifyContent:'space-evenly'}">
    <h1>Home Component</h1>
    <button @click="this.$router.push('/sign-in')" class="btn btn-outline-dark bg-dark text-white" type="submit">Sign In</button>
</div>
    </template>
    
    <script>
    export default {
        name:'HomePage',
        data(){
            return {
    
            }
        }
    }
    </script>
    
    <style scoped>
    
    </style>