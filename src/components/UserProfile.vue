<template>
    <h1>Hello, {{userName}}</h1>

    </template>
    
    <script>

    export default {
        name:'UserProfile',
        data(){
            return {
                userName:''
            }
        },
        mounted(){
           
            const data =JSON.parse(localStorage.getItem('user'))
           
                    this.userName = (data[0].userName)    
        }
    }
    </script>
    
    <style scoped>
    
    </style>