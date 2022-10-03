<template>
  <div class="container">
    <div class="text">welcome to desk rent company :)</div>
    <div class="login" @click="goToLogin()">Login</div>
    <div class="register" @click="goToRegister()">Register</div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  methods: {
    goToLogin() {
      this.$router.push({ path: "/login" });
    },
    goToRegister() {
      alert("we are working on this");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  width: 100%;
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  align-items: center;
}
.login,
.register {
  width: 120px;
  height: 40px;
  border-radius: 6px;
  background-color: aqua;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  cursor: pointer;
}
.text {
  margin-top: 100px;
  font-size: 28px;
  color: black;
}
</style>
