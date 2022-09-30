<template>
    <div class="container">
      <div class="welcome">wellcome {{msg}}</div>
    </div>
  </template>
  
  <script>

  export default {
    name: "homePage",
    data(){
      return {
        msg:null,
      }
    },
    created(){
    this.msg = localStorage.getItem("userRole");
  },
  };

  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  .container {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .welcome {
    margin-top: 50px;
  }
  </style>