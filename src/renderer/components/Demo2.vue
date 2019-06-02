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
            
            
            <h3> TODOs</h3>

            <div class="input-group input-group-sm mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-sm">Being to plan</span>
              </div>

              <input type="text" 
                    class="form-control" 
                    aria-label="Sizing example input" 
                    aria-describedby="inputGroup-sizing-sm"
                    placeholder="What you are going to do?" 
                                  @keyup.enter="addTodo(newTodo)" 
                                  v-model="newTodo">
              </div>

              <div class="form-group form-check">
                
              <!-- <template
                v-for="todo in todos" 
                :class="{ active: todo.completed }"
                >
                <input type="checkbox" 
                        class="form-check-input" 
                        id="exampleCheck1"
                        v-model="todo.completed"
                        >
                <label class="form-check-label" for="exampleCheck1">
                  
                {{todo.content}}
                - <a href="#" @click.prevent="removeTodo(todo)">Delete</a>
                </label>

                </template> -->

                </div>

                

                <ul >
                  <li v-for="todo in todos" 
                  :class="{ active: todo.completed }">
                    <input  type="checkbox" v-model="todo.completed">
                    {{todo.content}}
                    - <a href="#" @click.prevent="removeTodo(todo)">Delete</a>
                  </li>


                </ul>
                    <!-- <pre>
                      {{this.todos}}
                    </pre> -->
    
  </div>
      

    <br>

          </div>
      </div>
<!-- end -->
</div>

</template>








<script>


export default {


  // name of this .vue component
  name: "demo2",

  // data
  data: function() {
    return {
      todos:[
            {content:"Go shopping with wife", completed:false},
            {content:"Finish the fast.ai lesson 3", completed:false}
            ],
      newTodo:"",
    };
  },


  methods: {
    navigate(route){
      this.$router.push(route)
    },

      // 過去用這種寫法，下面是新的寫法，比較簡潔
    // addTodo: function(todo){
    //   this.todos.push({content:todo,completed: false})
    // },

    addTodo(todo){
      this.todos.push({content:todo, completed:false});
      this.newTodo = "";
    },
  
    removeTodo(todo){
      // splice(the index to remove, num of item to be removed)
      this.todos.splice(this.todos.indexOf(todo), 1);
    },


  }

}
</script>




<style>
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro");


li.active{
  text-decoration: line-through
}


.todo-input{
  margin-top: 20px;
}

.col-6 h3 {
  margin-top: 50px
}

</style>