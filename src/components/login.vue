<template>
  <div class="container">
    <div class="credentials">enter username</div>
    <input type="text" placeholder="username" v-model="username" />
    <div class="credentials">enter password</div>
    <input type="password" placeholder="password" v-model="password" />
    <div class="signIn" @click="signIn()">sign in</div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      username: null,
      password: null,
    };
  },
  methods: {
    signIn() {
      if (this.username == null || this.password == null) {
        alert("fill the fields");
      } else if (this.username == "user" && this.password == "user") {
        window.localStorage.setItem(
          "user",
          JSON.stringify(this.$store.state.users.users[0])
        );
        window.localStorage.setItem("userRole",this.$store.state.users.users[0].role)
        this.$router.push({ path: "/home" });
      } else if (this.username == "admin" && this.password == "admin") {
        window.localStorage.setItem(
          "user",
          JSON.stringify(this.$store.state.users.users[1])
        );
        window.localStorage.setItem("userRole",this.$store.state.users.users[1].role)
        this.$router.push({ path: "/home" });
      } else {
        alert("something is incorrect");
      }
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
  justify-content: center;
}
.credentials {
  color: black;
  margin-bottom: 10px;
  margin-top: 50px;
}
input {
  width: 120px;
  height: 40px;
  border-radius: 6px;
  padding-left:10px;
}
.signIn {
  margin-top: 40px;
  width: 100px;
  height: 35px;
  border-radius: 4px;
  background-color: aqua;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor:pointer;
}
</style>
