import {createRouter,createWebHistory} from 'vue-router'
import Home from './components/HomePage.vue'
import SignIn from './Auth/SignIn.vue'
import SignUp from './Auth/SignUp.vue'
import Profile from './components/UserProfile.vue'
import About from './components/AboutPage.vue'
import Dashboard from './components/DashBoard.vue'



const routes = [
    {
        name:Home,
        path:'/',
        component:Home,
    },
    {
        name:SignIn,
        path:'/sign-in',
        component:SignIn,
        meta:{auth:false}
    },
    {
        name:SignUp,
        path:'/sign-up',
        component:SignUp,
        meta:{auth:false}
    },
    {
        name:Profile,
        path:'/profile',
        component:Profile,
        meta:{auth:true}
    },
    {
        name:About,
        path:'/about',
        component:About,
        meta:{auth:true}
    },
    {
        name:Dashboard,
        path:'/dashboard',
        component:Dashboard,
        meta:{auth:true}
    },
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

router.beforeEach((to, from, next)=>{
   
const user = localStorage.getItem('user')

if('auth' in to.meta && to.meta.auth && !user){
        next('/sign-in')
}else if(!to.meta.auth && user && 'auth' in to.meta){
        next('/profile')
    }else{
        next()
    }






})

export default router;