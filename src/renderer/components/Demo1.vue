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
                  <button  disabled class="dropdown-item" type="button">Something else here</button>
                </div>
            
                </div>
            </div>
                   <div class="col-6">

      <!-- <a class="nav-link" href="#" @click="navigate('/')">Demo1</a> -->
              

    <!--{ use v-for to get list, also use v-model to double bind -->
        <div class="fetch">
          
            <h2>Latest Fastai Github Commits</h2>
            
            <template v-for="branch in branches">
              <input type="radio" :value="branch" v-model="currentBranch">
              {{ branch }}
            </template>

          <p>fastai@{{ currentBranch }}</p>
            <p>
              Donec sit amet tellus lectus. Mauris a nisl at urna vestibulum suscipit sed non felis. Suspendisse facilisis, augue facilisis commodo pulvinar, odio velit aliquam erat, vitae fermentum sem ligula vel erat. Donec eu urna sed tellus molestie iaculis. Suspendisse urna velit, rhoncus non dictum sit amet, tempor quis neque.
            </p>
              <ul>
                <li v-for="record in commits">
                  <a :href="record.html_url" target="_blank" 
                  class="commit">更新紀錄</a>
                  -
                  by
                  <span class="author">
                    <a :href="record.author.html_url" 
                        target="_blank">
                        {{ record.commit.author.name }}</a>
                  </span>
                  at
                  <span class="date">{{ record.commit.author.date | formatDate }}</span>
                </li>
              </ul>
          </div>

    <br>

          </div>
      </div>
<!-- end -->
</div>

  </div>
</template>

<script>
var apiKey = "https://api.github.com/repos/fastai/fastai/commits?per_page=5&sha=";
// 
export default {
  // name of this vue component
  name: "demo1",

  // data need to use function 
  data() {
    return {
      branches: ["master", "fp16","revert-2070-index_row","release-1.0.52"],
      currentBranch: "master",
    };
  },

// data, computed, methods, watch/event callbacks has finished processing
// the mounting phase has not been started, 
// and the $el property will not be available yet.
// 通常在這個階段去用api get data
  created: function() {
    this.fetchData();
  },

  watch: {
    currentBranch: "fetchData"
  },

  methods: {

    navigate(route){
      this.$router.push(route)
    },

    fetchData() {
      var xhr = new XMLHttpRequest();
      var self = this;
      xhr.open("GET", apiKey + self.currentBranch);
      xhr.onload = function() {
        self.commits = JSON.parse(xhr.responseText);
        console.log(self.commits[0].html_url);
      };
      xhr.send();
    },
  },




  filters: {

    formatDate(v){
      return v.replace(/T|Z/g," ")
    },

    capitalize (value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }
};




</script>


<style>

/* use this google font */
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro");

/* when li have class avtive, line-through */
li.active {
  text-decoration: line-through;
}

.fetch {
  margin-top:40px;
}


</style>
