<template>
  <div class="container">
    <div class="credentials">enter username</div>
    <input type="text" placeholder="username" v-model="username"/>
    <div class="credentials">enter password</div>
    <input type="text" placeholder="password" v-model="password"/>
    <div class="signIn" @click="signIn()">sign in</div>
  </div>
</template>

<script>

export default {
  name: "HelloWorld",
  data() {
    return {
        username:null,
        password:null,
    }
  },
  methods: {
    signIn(){
        if ( this.username == null|| this.password == null) {
            alert("fill the fields");
        }
    }
  }
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
.credentials {
    color:black;
    margin-bottom:10px;
    margin-top:10px;
}
input {
    width:120px;
    height:40px;
    border-radius:6px;
}
.signIn {
    margin-top:20px;
    width:100px;
    height:35px;
    border-radius:4px;
    background-color: aqua;
    display:flex;
    align-items: center;
    justify-content: center;
}
</style>
