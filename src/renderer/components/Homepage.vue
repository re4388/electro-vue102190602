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
                  <h3>
                      Welcome to Electron Vue Essentials
                  </h3>
                <p>Here, I would like to demo some of the vue basic use cases</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc molestie turpis eu enim bibendum, sed lacinia quam tempor. Donec est turpis, vulputate vel nunc at, interdum gravida nulla. Nullam malesuada vel massa nec aliquet. Aliquam consectetur dolor sed nulla consectetur sodales. Aliquam eu justo ut risus molestie dapibus. Nullam blandit purus ornare, viverra metus eget, lacinia felis. Integer quis consectetur velit, a malesuada metus. Maecenas sed felis condimentum, pretium diam at, placerat augue. Vivamus ac urna maximus, gravida nunc ut, egestas libero. Nulla lobortis accumsan augue.</p>

              <div class="alert alert-success" role="alert">
                <!-- <h4 class="alert-heading">Well done!</h4> -->
                <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
                <!-- <hr> -->
                <!-- <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p> -->
              </div>
              <div>
                Total time: 00:09
              </div><br>

                <table class="table">
                  <thead class="thead-light">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Handle</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>

                  </tbody>
                </table>

                <div class="alert alert-primary" role="alert">
                <strong> &#10071; Note:</strong>
                 Aenean felis est, porta at gravida nec, luctus nec justo. Maecenas elementum pretium nibh, et lobortis purus dictum id. Mauris tempus nec lorem mattis ultricies. Sed viverra ligula mollis, lobortis lectus sed, aliquam libero. Mauris quis diam lacus.
                </div>


              <hr>

              </div>
              
          </div>
      </div>
<!-- end -->
  </div>
</template>

<script>


export default {
  // name of this vue component
  name: "Homepage",
  methods: {
    navigate(route){
      this.$router.push(route)
    }
  }

  
}


</script>






<style>

/* use this google font */
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro");

/* when li have class avtive, line-through */
li.active {
  text-decoration: line-through;
}

.dropdown {
  margin-top: 30px
}

.col-6 h3 {
  margin-top: 50px
}


</style>
