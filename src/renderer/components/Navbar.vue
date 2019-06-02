<template>

<nav class="navbar navbar-light" 
    style="background-color: #347DBE;" href="#" @click="navigate('/')">
    <a class="navbar-brand" href="#">
        <img src="/docs/4.3/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="">
        &#127968 Electron Vue Essentials
        <!-- <img src="../../../static/home.svg" height="23" alt=""> -->
        
    </a>

    
    <!-- <div>Icons made by <a href="https://www.flaticon.com/authors/iconnice" title="Iconnice">Iconnice</a> from <a href="https://www.flaticon.com/" 		    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 		    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> -->
</nav>
<!-- <nav>

    <ul class="nav" justify-content-center>

    <li class="nav-item">
        <a class="nav-link" href="#" @click="navigate('/')">Demo1</a>
    </li>

    <li class="nav-item">
        <a class="nav-link" href="#" @click="navigate('/demo2')">Demo2</a>
    </li>

    <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">working on</a>
    </li>
    
    <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
    </li>
    
    </ul>

</nav> -->
</template>

<script>
export default {
    name: "Navbar",
    methods: {
    navigate(route) {
        this.$router.push(route);
        }
    }
};
</script>

<style>
</style>


