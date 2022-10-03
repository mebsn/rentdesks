<template>
  <div class="container">
    <div class="bigTable">
      <div>desks</div>
      <div class="desks" v-for="desk in desks" :key="desk.id">
        id:{{ desk.id }} available: {{ desk.istaken }} size:{{
          desk.size
        }}
        price:{{ desk.price }} location:{{ desk.location }}
        <button class="button"
          @click="remove(desk.id)">Remove desk from list</button>
      </div>
    </div>
    <div class="option" @click="addnew()">Add desk</div>
    <div class="createDesk" v-if="showCreate">
      <label>price:</label>
      <input type="number" placeholder=" price" v-model="price"/>
      <label>size:</label>
      <input type="text" placeholder=" size" v-model="size" />
      <label>location:</label>
      <input type="text" placeholder=" location" v-model="location" />
      <label>place:</label>
      <select v-model="place">
        <option value="bigRoom">bigRoom</option>
        <option value="smallRoom">smallRoom</option>
      </select>
      <div class="create" @click="createDesk()">create</div>
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
      price:null,
      place:null,
      size:null,
      location:null,
      showCreate:false,
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("user");
      localStorage.removeItem("userRole");
      this.$router.push({ path: "/" });
    },
    remove(x){
          this.$store.state.desks.desks.splice(x, 1);
    },
    addnew(){
      this.showCreate = true;
    },
    async createDesk(){
      let id = this.$store.state.desks.desks.length
      let newDesk = {id:id,place:this.place,location:this.location, price:this.price, size:this.size, istaken:false};
      await this.$store.state.desks.desks.push(newDesk);
      console.log(this.$store.state.desks);
      this.showCreate = false;
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
.desks {
  margin-top: 5px;
  border: 2px solid black;
  display:flex;
  justify-content: space-between;
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
    margin-top:50px;
  }
  .button {
    margin-left:10px;
  }
  .createDesk {
    width:500px;
    height:300px;
    background-color: aqua;
    position:absolute;
    display:flex;
    flex-direction: column;
    align-items: center;
    margin-top:200px;
    border:3px solid green;
  }
  label {
    margin-top:10px;
  }
  .create {
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 6px;
    background-color: blueviolet;
    width:100px;
    height:30px;
    margin-top:20px;
    color:white;
  }
</style>
