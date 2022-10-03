<template>
  <div class="container">
    <div class="welcome">wellcome to desk rent service -  {{ msg.username }}</div>
    <div class="option" v-if="isAdmin" @click="goToDesks()">Admin Panel</div>
    <div class="bigTable" v-if="showBigRoomForUser">
      <div>Big Room</div>
      <div class="desks" v-for="desk in bigRoomDesks" :key="desk.id">
        id:{{ desk.id }} available: {{ desk.istaken }} size:{{
          desk.size
        }}
        price:{{ desk.price }} location:{{ desk.location }}
        <button class="button"
          @click="
            desk.istaken == false
              ? rentDesk(desk.id, desk.place, desk)
              : blockedDesk(desk.id);
          "
        >
          {{ desk.istaken == false ? "view details" : "blocked" }}
        </button>
      </div>
    </div>
    <div class="bigTable" v-if="showSmallRoomForUser">
      <div>Small Room</div>
      <div class="desks" v-for="desk in smallRoomDesks" :key="desk.id">
        id:{{ desk.id }} available: {{ desk.istaken }} size:{{
          desk.size
        }}
        price:{{ desk.price }} location:{{ desk.location }}
        <button class="button"
          @click="
            desk.istaken == false
              ? rentDesk(desk.id, desk.price)
              : blockedDesk(desk.id);
          "
        >
          {{ desk.istaken == false ? "view details" : "blocked" }}
        </button>
      </div>
    </div>
    <div class="logout" @click="logout()">Log Out</div>
  </div>
</template>

<script>
export default {
  name: "homePage",
  data() {
    return {
      msg: JSON.parse(localStorage.getItem("user")),
      bigRoomDesks: this.$store.state.desks.desks.filter(
        (desk) => desk.place == "bigRoom"
      ),
      smallRoomDesks: this.$store.state.desks.desks.filter(
        (desk) => desk.place == "smallRoom"
      ),
      showBigRoomForUser: true,
      showSmallRoomForUser: true,
      isAdmin: false,
    };
  },
  mounted() {
    let activeUser = JSON.parse(localStorage.getItem("user"));
    if (activeUser.role == "admin") {
      this.isAdmin = true;
    }
    const isAvailable = (currentValue) => currentValue.istaken == true;
    let statusBigRoom = this.bigRoomDesks.every(isAvailable);
    let statusSmallRoom = this.smallRoomDesks.every(isAvailable);
    if (activeUser.role == "client" && statusBigRoom == true) {
      this.showBigRoomForUser = false;
    } else if (activeUser.role == "client" && statusSmallRoom == true) {
      this.showSmallRoomForUser = false;
    }
  },
  methods: {
    goToDesks() {
      this.$router.push({ path: "/adminPanel" });
    },
    logout() {
      localStorage.removeItem("user");
      this.$router.push({ path: "/" });
      localStorage.removeItem("userRole");
    },
    blockedDesk(x) {
      alert("desk with id " + x +" is already in use");
    },
    rentDesk(x,y,z) {
      window.localStorage.setItem("dynamicRoute" , JSON.stringify(z))
      this.$router.push({name:"details",  path: `/details/${y}/${x}` });
    }
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
.welcome {
  margin-top: 50px;
}
.bigTable {
  margin-top: 50px;
  /* border: 2px solid black; */
}
.desks {
  margin-top: 5px;
  border: 2px solid black;
  display:flex;
  justify-content: space-between;
}
.option {
  margin-top: 30px;
  margin-bottom: 10px;
  width: 120px;
  background-color: blue;
  height: 30px;
  color: white;
  display:flex;
  justify-content:center;
  align-items:center;
  border-radius:6px;
  cursor: pointer;
}
.logout {
  margin-top: 100px;
  width: 120px;
  height: 40px;
  border-radius: 6px;
  cursor: pointer;
  background-color: aqua;
  display: flex;
  justify-content: center;
  align-items: center;
}
.button {
  margin-left:10px;
  cursor:pointer;
}
</style>
