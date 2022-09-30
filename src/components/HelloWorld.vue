<template>
  <div class="container">
    <div class="login" @click="goToLogin">Login</div>
    <div class="register">Register</div>
  <div class="text"> welcome to desk rent company :)</div> 
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  methods: {
    goToLogin() {
      this.$router.push({ path: "/login" });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  width:100%;
  height:100vh;
  display:flex;
  flex-direction: column;
  align-items:center;
}
.login, .register {
  width: 120px;
  height:40px;
  border-radius:6px;
  background-color: aqua;
  color:black;
  display:flex;
  justify-content:center;
  align-items:center;
  margin-top:20px;
  cursor:pointer;
}
.text {
  margin-top:50px;
  font-size:28px;
  color:black;
}
</style>
