<template>
<NavBar v-if="this.$route.path != '/sign-in' && this.$route.path != '/sign-up' && this.$route.path != '/'" />
  <router-view></router-view>
</template>

<script>
import NavBar from './components/NavBar.vue'
export default {
  name: 'App',
  components:{
    NavBar
  },
  mounted(){
    // console.log(this.$route,'allRoutes');
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
