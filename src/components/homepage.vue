<template>
  <div class="container">
    <div class="welcome">wellcome {{ msg }}</div>
    <div class="bigTable" v-if="showBigRoomForUser">
      <div>Big Room</div>
      <div class="desks"
        v-for="desk in bigRoomDesks"
        :key="desk.id"
      >
        id:{{ desk.id }}
        available: {{desk.istaken}}
        size:{{desk.size}}
        price:{{desk.price}}
        location:{{desk.location}}
      </div>
    </div>
    <div class="bigTable" v-if="showSmallRoomForUser">
      <div>Small Room</div>
      <div class="desks"
        v-for="desk in smallRoomDesks"
        :key="desk.id"
      >
        id:{{ desk.id }}
        available: {{desk.istaken}}
        size:{{desk.size}}
        price:{{desk.price}}
        location:{{desk.location}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "homePage",
  data() {
    return {
      msg: localStorage.getItem("userRole"),
      bigRoomDesks: this.$store.state.desks.desks.filter(
        (desk) => desk.place == "bigRoom"
      ),
      smallRoomDesks: this.$store.state.desks.desks.filter(
        (desk) => desk.place == "smallRoom"
      ),
      showBigRoomForUser: true,
      showSmallRoomForUser:true,
    };
  },
  mounted() {
    const isAvailable = (currentValue) => currentValue.istaken == true;
    let statusBigRoom = this.bigRoomDesks.every(isAvailable);
    let statusSmallRoom = this.smallRoomDesks.every(isAvailable);
    console.log(statusSmallRoom);
    if ((localStorage.getItem("userRole") == "client") && statusBigRoom == true) {
      this.showBigRoomForUser = false;
    } else if ((localStorage.getItem("userRole") == "client") && statusSmallRoom == true) {
      this.showSmallRoomForUser = false;
    }
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
.bigTable {
  margin-top:50px;
  border:2px solid black;
}
.desks {
  margin-top:5px;
  border:2px solid black;
}
</style>
