<template>
  <div class="w-full h-screen bg-gray-500 flex justify-center items-center">
    <div
      class="w-[600px] h-auto p-8 rounded-lg mx-auto shadow-xl flex flex-col gap-y-4 bg-gray-400">
      <span>
        <p class="text-white text-[24px] ml-[40%] mt-10">Sign Up</p>
      </span>
      <span class="flex gap-4">
        <label for="UserName" class="ml-5 text-white w-[150px]">
          Your Name:</label
        >
        <input
          type="text"
          name="UserName"
          placeholder="Your user name"
          class="rounded-t-md h-8 w-[300px]"
          v-model="nameOfUser" />
      </span>
      <span class="flex gap-4">
        <label for="UserName" class="ml-5 text-white w-[150px]"> Age:</label>
        <input
          type="number"
          name="UserName"
          placeholder="Your user name"
          class="rounded-t-md h-8 w-[300px]"
          v-model="ageOfUser" />
      </span>
      <span class="flex gap-4">
        <label for="UserName" class="ml-5 text-white w-[150px]">
          Adress :</label
        >
        <input
          type="text"
          name="UserName"
          placeholder="Your user name"
          class="rounded-t-md h-8 w-[300px]"
          v-model="adressOfUser" />
      </span>
      <span class="flex gap-4">
        <label for="UserName" class="ml-5 text-white w-[150px]"> Email :</label>
        <input
          type="text"
          name="UserName"
          placeholder="Your user name"
          class="rounded-t-md h-8 w-[300px]"
          v-model="emailOfUser" />
      </span>
      <span class="flex gap-4">
        <label for="UserName" class="ml-5 text-white w-[150px]">
          Phone number :</label
        >
        <input
          type="number"
          name="UserName"
          placeholder="Your user name"
          class="rounded-t-md h-8 w-[300px]"
          v-model="phonenumberOfUser" />
      </span>
      <span class="flex gap-4">
        <label for="UserName" class="ml-5 text-white w-[150px]">
          User Name:</label
        >
        <input
          type="text"
          name="UserName"
          placeholder="Your user name"
          class="rounded-t-md h-8 w-[300px]"
          v-model="userName" />
      </span>
      <span class="flex justify-center items-center gap-2 mt-4">
        <button
          type="submit"
          class="bg-gradient-to-r from-slate-100 to-fuchsia-200 border rounded-lg w-32 active:ring-4 border-r-indigo-300 ring-2 hover:shadow-input ring-red-200 animate-bounce"
          @click="backToLogin">
          Login
        </button>
        <button
          type="submit"
          class="bg-gradient-to-r from-slate-100 to-fuchsia-200 border rounded-lg w-32 active:ring-4 border-r-indigo-300 ring-2 hover:shadow-input ring-red-200 animate-bounce"
          @click="registerUser">
          Register
        </button>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppointmentAppSigUp",
  data() {
    return {
      nameOfUser: "",
      ageOfUser: "",
      adressOfUser: "",
      emailOfUser: "",
      phonenumberOfUser: "",
      userName: "",
};
  },

  mounted() {},

  methods: {
    backToLogin() {
      this.$router.push({ path: './' });
    },
    registerUser() {
      if (
        this.userName === "" ||
        this.ageOfUser === "" ||
        this.nameOfUser === "" ||
        this.ageOfUser === "" ||
        this.adressOfUser === "" ||
        this.emailOfUser === "" ||
        this.phonenumberOfUser === ""
      ) {
        alert("Please enter your full Data!");
      } else {
        fetch(
          "https://appointment-management-381708-default-rtdb.firebaseio.com/userInfor.json",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: this.nameOfUser,
              age: this.ageOfUser,
              adress: this.adressOfUser,
              email_adress: this.emailOfUser,
              phone_number: this.phonenumberOfUser,
              user_name: this.userName,
            }),
          }
        )
          .then((res) => {
            if (!res.ok) {
              throw new Error(res.message);
            }
            alert("Sign Up Success");
            this.$router.replace({ path: "./" });
            return res.json();
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
};
</script>
