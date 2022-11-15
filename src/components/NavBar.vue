<template>
    <div class="container-fluid">
        <nav class="navbar navbar-expand-lg  navbar-light bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/profile">Profile</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/about">About</a>
            </li>
            
          </ul>
          <form class="d-flex">
            
            <button @click="logout" class="btn btn-outline-dark bg-dark w-100 me-2 text-white" type="submit">
            {{user ? "Log Out" : "Sign In"}}
            </button>
            
          </form>
        </div>
      </div>
    </nav>
    </div>
    </template>
    
    <script>
    export default {
        name:'NavBar',
        data(){
          return {
            user:''
          }
        },
        mounted(){
         this.user = localStorage.getItem('user')
        },
        methods:{
          logout(){
            localStorage.clear()
            this.$router.push('/sign-in')
          }
          }
    }
    </script>

    <style scoped>
  
  </style>