<template>
  <div id="app">
    <!-- Navbar to route to different component -->
    <Navbar />
    <!-- <Homepage /> -->


    <!-- all components go here -->
    <router-view></router-view>
  
  </div>
</template>

<script>
// we need to import component to use below
import Navbar from "@/components/Navbar"
import Homepage from "@/components/Homepage"

// we will define data logic here and export out
  export default {
    name: 'test-app',
    components:{
      Navbar,
      // Homepage,

    }
  }
</script>

<style>
  /* CSS */
</style>
