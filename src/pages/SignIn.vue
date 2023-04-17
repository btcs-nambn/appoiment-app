<template>
  <div class="w-full h-screen bg-gray-400 flex justify-center items-center">
    <form
      class="w-[400px] h-[250px] rounded-lg mx-auto shadow-xl flex flex-col gap-y-4 bg-gradient-to-r from-blue-300 via-yellow-200 to-green-200"
      @submit.prevent="loginApp">
      <span>
        <p class="text-[30px] ml-[40%] mt-10 font-bold italic">Sign In</p>
      </span>
      <spam class="flex gap-4">
        <label for="UserName" class="ml-5"> User Name :</label>
        <input
          type="text"
          id="UserName"
          name="UserName"
          placeholder="Your user name"
          class="flex-1 mr-5 rounded-t-md h-8"
          v-model="userNameLogin"
          required
          oninvalid="this.setCustomValidity('Please enter your user name .....')" />
      </spam>
      <span class="flex justify-center items-center gap-4 mt-4">
        <button
          type="submit"
          class="bg-gradient-to-r from-slate-100 to-fuchsia-200 border rounded-lg w-32 active:ring-4 border-r-indigo-300 shadow-xl ring-2 hover:shadow-input ring-red-200 animate-bounce">
          Login
        </button>
        <button
          @click="gotoSignUp"
          type="button"
          class="bg-gradient-to-r from-slate-100 to-fuchsia-200 border rounded-lg w-32 active:ring-4 border-r-indigo-300 shadow-xl ring-2 hover:shadow-input ring-red-200 animate-bounce">
          Sign Up
        </button>
      </span>
    </form>
  </div>
</template>

<script>
export default {
  name: "AppointmentAppSigninSignup",

  data() {
    return {
      userNameLogin: "",
      passwordLogin: "",
    };
  },

  methods: {
    gotoSignUp() {
      this.$router.push({ path: "./register" });
    },
    loginApp() {
      fetch(
        "https://appointment-management-381708-default-rtdb.firebaseio.com/userInfor.json",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          let matchFound = false;
          for (var key in data) {
            if (data[key].user_name === this.userNameLogin.trim()) {
              this.$router.replace("./makeappointment");
              this.$store.commit("setName", data[key].user_name);
              this.$store.commit("setKey", key);
              matchFound = true;
              break;
            }
          }
          if (!matchFound) {
            alert("Invalid username or password");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
