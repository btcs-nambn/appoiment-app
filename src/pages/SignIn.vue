<template>
  <div class="w-full h-screen bg-slate-900 flex justify-center items-center">
    <div
      class="w-[400px] h-[250px] border rounded-lg mx-auto shadow-xl flex flex-col gap-y-4">
      <span>
        <p class="text-white text-[24px] ml-[40%] mt-10">Sign In</p>
      </span>
      <spam class="flex gap-4">
        <label for="UserName" class="ml-5 text-white"> User Name :</label>
        <input
          type="text"
          name="UserName"
          placeholder="Your user name"
          class="flex-1 mr-5 rounded-t-md h-8"
          v-model="userNameLogin" />
      </spam>
      <spam class="flex gap-4">
        <label for="passwords" class="ml-5 text-white"> Pass Word :</label>
        <input
          type="password"
          name="passwords"
          placeholder="Your PassWords"
          class="flex-1 mr-5 rounded-t-md h-8"
          v-model="passwordLogin" />
      </spam>
      <span class="flex justify-center items-center gap-2">
        <button
          type="submit"
          class="bg-gradient-to-r from-slate-100 to-fuchsia-200 border rounded-lg w-32 active:ring-4 border-r-indigo-300"
          @click="loginApp">
          Login
        </button>
        <button
          @click="gotoSignUp"
          type="submit"
          class="bg-gradient-to-r from-slate-100 to-fuchsia-200 border rounded-lg w-32 active:ring-4 border-r-indigo-300">
          Sign Up
        </button>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppointmentAppSigninSignup",

  data() {
    return {
      userNameLogin: "",
      passwordLogin: "",
      apiLogin:
        "https://appointment-management-381708-default-rtdb.firebaseio.com/userInfor.json",
    };
  },

  methods: {
    gotoSignUp() {
      this.$router.push({ path: "./register" });
    },
    loginApp() {
      if (this.userNameLogin === "" || this.userpasswordLogin === "") {
        alert("Please enter your name and password");
      } else {
        fetch(this.apiLogin, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((data) => {
            let matchFound = false;
            for (var key in data) {
              if (
                data[key].user_name === this.userNameLogin.trim() &&
                data[key].password === this.passwordLogin.trim()
              ) {
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
      }
    },
  },
};
</script>
