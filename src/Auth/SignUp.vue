<template>
<div className="container-fluid">

<div class="card p-4 mt-5 w-50 ms-auto me-auto">

    <h2>Sign Up</h2>

    <form className="mt-4">
        <div class="form-group">
            <label for="exampleInputUserName" class="mb-1">UserName</label>
            <input type="text" class="form-control" id="exampleInputUserName" v-model="signUp.userName" aria-describedby="emailHelp" placeholder="Enter Username">

        </div>

        <div class="form-group">
            <label for="exampleInputEmail1" class="mb-1 mt-3">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" v-model="signUp.email" aria-describedby="emailHelp" placeholder="Enter Email">

        </div>
        <div class="form-group">
            <label for="exampleInputPassword1" class="mb-1 mt-3">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" v-model="signUp.password" placeholder="Password">
        </div>

        <button type="submit" @click="handleSubmit" class="btn btn-success mt-4">Sign Up</button>
        <p className="mt-3">
            Already have account   <router-link to="/sign-in">Sign In</router-link>
        </p>
    </form>
</div>
</div>

</template>

<script>
export default {
    name:'SignUp',
    data(){
        return {
            signUp:{
                userName:'',
                email:'',
                password:''
            }
        }
    },
    methods:{
        handleSubmit(){

        }
    }
}
</script>

<style scoped>

</style>