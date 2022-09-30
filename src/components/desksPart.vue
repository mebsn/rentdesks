<template>
  <div class="container">
    <div class="bigTable">
      <div>desks</div>
      <div class="desks" v-for="desk in desks" :key="desk.id">
        id:{{ desk.id }} available: {{ desk.istaken }} size:{{
          desk.size
        }}
        price:{{ desk.price }} location:{{ desk.location }}
      </div>
    </div>
    <div class="logout" @click="logout()">Log Out</div>
  </div>
</template>

<script>
export default {
  name: "desksPart",
  data() {
    return {
      desks: this.$store.state.desks.desks,
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("user");
      localStorage.removeItem("userRole");
      this.$router.push({ path: "/" });
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
.logout {
  margin-top: 200px;
  width: 120px;
  height: 40px;
  border-radius: 6px;
  cursor: pointer;
  background-color: aqua;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
