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
                <button class="dropdown-item" type="button">Todo List</button>
                <button class="dropdown-item" type="button">Something else here</button>
              </div>
            </div>

      <!-- <a class="nav-link" href="#" @click="navigate('/')">Demo1</a> -->
              
          </div>

              
  
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">OPEN AND LOVE</a>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>


    <div class="collapse navbar-collapse" id="navbarSupportedContent">

<!-- use @click to change view, changeView is a func to change component  -->
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="changeView('about')">About</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="changeView('home')">Link1</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="changeView('posts')">Link2</a>
          </li>
        </ul>

      </div>
    </nav>

<!-- v-html, use v-html="data_name" to show html -->
    <div class="row">
      <div class="col">
        <div class="jumbotron" v-html="msg"></div>
      </div>
    </div>

    <br>

<!-- use filter, also use BS4  alert-warning  -->
    <div>
      {{ msg2 | capitalize}}
      <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>


<!-- use kepp-alive to let component in cache and use :is="view" to change view -->
    <div id="app">
      <keep-alive>
        <component :is="view"></component>
      </keep-alive>
    </div>


    <br>


<!-- use v-if and v-else to show content or not  -->
    <div v-if="isShow">條正成立</div>
    <div v-else>條件不成立</div>

    <br>


<!-- use v-show to show content -->
    <div v-show="isShow2">顯示vshow</div>

    <br>


<!-- use v-bind to bind id and v-for too loop thru list -->
    <div>
      <h2>各家庭的父親 V-for Demo</h2>
      <ul>
        <li :key="home.id" v-for="home in homes">{{ home.father }}</li>
      </ul>
    </div>

    <br>


<!-- use v-model to double-bind -->
    <div>
      <h2>Double Bind Demo</h2>
      <input type="text" v-model="msg3">
      <div class="hi">{{msg3}}</div>
    </div>
    <br>

    <br>


<!-- use v-model to double-bind -->
    <div>
      <h2>攝氏/華氏轉換計算機, V-model Demo2</h2>
      <input type="text" placeholder="輸入攝氏溫度" v-model="celsius">
      <br>
      <span>換算過的華氏溫度：{{fahrenheit}} </span>
    </div>

    <br>


<!-- use v-for to get list, also use v-model to double bind -->
    <div>
      <h2>Latest Vue.js Commits</h2>
      <template v-for="branch in branches">
        <input type="radio" :value="branch" v-model="currentBranch">
        {{ branch }}
      </template>

      <p>vuejs/vue@{{ currentBranch }}</p>

      <ul>
        <li v-for="record in commits">
          <a :href="record.html_url" target="_blank" class="commit">更新紀錄</a>
          -
          by
          <span class="author">
            <a :href="record.author.html_url" 
                target="_blank">
                {{ record.commit.author.name }}</a>
          </span>
          at
          <span class="date">{{ record.commit.author.date }}</span>
        </li>
      </ul>
    </div>

    <br>

<!-- Simple Todo app -->
<!-- use v-on/@ to hit link function to addTodo... -->
    <div>
      <input type="text" 
              placeholder="請輸入代辦事項" 
              @keyup.enter="addTodo(newTodo)" 
              v-model="newTodo">

      <h2>事項列表</h2>

      <ul>
        <li v-for="todo in todos" :class="{ active: todo.completed }">
          <input type="checkbox" v-model="todo.completed">
          {{todo.content}}
          -
          <a href="#" @click.prevent="removeTodo(todo)">刪除</a>
        </li>
      </ul>

      <pre>
      {{this.todos}}
      </pre>
    </div>
          </div>
      </div>






<!-- end -->

  </div>
</template>

<script>
var apiKey = "https://api.github.com/repos/vuejs/vue/commits?per_page=3&sha=";

export default {
  // name of this vue component
  name: "demo1",

  // data need to use function 
  data() {
    return {
      view: "home",


      msg: "<h1>HELLOW WORLD</h1>",


      msg2: "hello world 2",

      isShow: true,
      isShow2: true,

      homes: [
        { id: 1, father: "王大明" },
        { id: 2, father: "天天" },
        { id: 3, father: "John" }
      ],

      msg3: "",

      celsius: 0,

      branches: ["master", "dev"],
      currentBranch: "master",
      commits: null,

      todos: [],
      newTodo: ""
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

  computed: {
    fahrenheit() {
      return (this.celsius * 9) / 5 + 32;
    }
  },

  methods: {
    // 過去用這種寫法，下面是新的寫法，比較簡潔
    // addTodo: function(todo){
    //   this.todos.push({content:todo,completed: false})
    // },

    addTodo(todo) {
      this.todos.push({ content: todo, completed: false });
    },

    removeTodo(todo) {
      // splice(the index to remove, num of item to be removed)
      this.todos.splice(this.todos.indexOf(todo), 1);
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




    changeView(viewName) {
      this.view = viewName;
    }
  },



  components: {
    about: {
      template: "<h1>This is about me </h1>"
    },

    home: {
      template: "<h2>This is home.</h2>"
    },

    posts: {
      template: "<p>This is posts.</p>"
    }
  },



  filters: {
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


</style>
