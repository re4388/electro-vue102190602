<template>
  <div id="wrapper" class="container-fluid">

      <div class="container">
        <div class="row">
          <div class="col-3">

              <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" 
                    type="button" id="dropdownMenu2" data-toggle="dropdown" 
                    aria-haspopup="true" aria-expanded="false"
                    style="background-color: #F1F1F1; color: #070000;"
              
                    >
                Applications
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                <button class="dropdown-item" type="button" href="#" @click="navigate('/demo1')">Fetch data</button>
                <button class="dropdown-item" type="button" href="#" @click="navigate('/demo2')">Todo List</button>
                <button class="dropdown-item" type="button" href="#" @click="navigate('/demo3')">Celsius to fahrenheit</button>
                <button disabled class="dropdown-item" type="button">Something else here</button>
              </div>
            </div>

      <!-- <a class="nav-link" href="#" @click="navigate('/')">Demo1</a> -->
              
          </div>
          
          <div class="col-6">
        <!-- use v-model to double-bind -->
            <div>
              <h3>攝氏 => 華氏</h3>
              <br>
              <input
                class="form-control" 
                aria-label="Sizing example input" 
                aria-describedby="inputGroup-sizing-sm" 
                type="text" placeholder="輸入攝氏溫度" v-model="celsius">
              <br>
              <span>
                <h4>
                    換算過的華氏溫度：{{fahrenheit}} 
                </h4>
                </span>
            </div>

          </div>
      </div>


</div>



<!-- end -->

  </div>
</template>

<script>

export default {
  // name of this vue component
  name: "demo3",

  // data need to use function 
  data() {
    return {
      celsius: 0,

    };
  },



  computed: {
    fahrenheit() {
      return (this.celsius * 9) / 5 + 32;
    }
  },

  methods: {

    navigate(route){
      this.$router.push(route)
    },

  },


};




</script>

<style>

/* use this google font */
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro");

/* when li have class avtive, line-through */
li.active {
  text-decoration: line-through;
}


.c-input{
  margin-top: 20px;
}

.col-6 h3 {
  margin-top: 50px
}

.col-6 h4 {
  margin-top: 20px
}

</style>
