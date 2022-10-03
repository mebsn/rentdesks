<template>
    <div class="container">
      <div class="information"> See Desks Detailed info here</div>
      <div class="info">deskId: {{desk.id}}</div>
      <div class="info">available: {{desk.istaken}}</div>
      <div class="info">place of desk: {{desk.place}}</div>
      <div class="info">price of desk: {{desk.price}}</div>
      <div class="info">location of desk: {{desk.location}}</div>
      <div class="info">size of desk: {{desk.size}}</div>
      <div class="options"><div class="option">Rent</div><div  class="option" @click="homepage()">homepage</div></div>
    </div>
  </template>
  
  <script>
  export default {
    name: "homePage",
    data() {
     return {
        desk:null,
     }
    },
    created() {
        let params = JSON.parse(window.localStorage.getItem("dynamicRoute"));
        this.desk  = this.$store.state.desks.desks[params.id]
    },
    methods: {
        homepage(){
            this.$router.push({path: "/home"});
        }
    }
  };
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .information {
    margin-top:50px;
  }
  .info {
    margin-top:10px;
    border:1px solid black;
    height:40px;
    width:200px;
    display:flex;
    justify-content: center;
    align-items: center;
    border-radius:6px;
  }
  .options {
    width:300px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top:50px;
  }
  .option {
    width:80px;
    height:40px;
    border-radius:6px;
    cursor: pointer;
    background-color: aqua;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  </style>