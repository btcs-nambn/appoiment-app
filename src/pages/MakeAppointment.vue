<template>
  <div class="relative">
    <div
      class="w-screen h-[700px] border text-white grid grid-rows-6 bg-slate-800">
      <div
        class="row-span-1 w-full pr-5 flex justify-between items-center border">
        <p
          class="text-center animate-pulse rainbow-text font-bold text-4xl mt-5 ml-[25%]">
          Make Appointment Managerment
        </p>
        <span class="flex flex-col ml-10 items-center">
          <label
            for="logout"
            class="cursor-pointer hover:text-blue-200 text-purple-300"
            >{{ userName }}</label
          >
          <a
            href="#"
            class="underline text-blue-300 font-mono active:text-red-300 mb-2"
            @click="logOut"
            ><p class="text-[12px]">Log Out</p></a
          >
          <button
            class="w-24 h-6 border rounded-xl mr-5 animate-bounce duration-500 bg-gradient-to-r from-green-200 via-orange-300 to-transparent hover:ring-4 ring-red-300"
            @click="showInforUser">
            <p class="text-[12px] hover:text-blue-800 text-fuchsia-600">
              Information
            </p>
          </button>
        </span>
      </div>
      <div class="row-span-5 overflow-auto">
        <show-calendar
          @choose-time="makeAppointment"
          @get-appointment="getAppointment"
          :booksDate="bookDateArray"></show-calendar>
      </div>
    </div>
    <div
      v-if="isVisibleMakeappointment"
      class="flex justify-center items-center z-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <appointment-infor
        @addAppointment="addAppointment"
        @hidenModal="hiddenModal"></appointment-infor>
    </div>
  </div>
</template>
<script>
import ShowCalendar from "../components/ShowCalendar.vue";
import AppointmentInfor from "../components/AppointmentInfor.vue";

export default {
  components: {
    ShowCalendar,
    AppointmentInfor,
  },

  data() {
    return {
      bookDateArray: [],
      LoginInfor: [],
      isVisibleMakeappointment: false,
      dateOrder: "",
      timeOrder: "",
    };
  },
  methods: {
    addAppointment(title, content) {
      this.isVisibleMakeappointment = false;
      fetch("https://appointment-management-381708-default-rtdb.firebaseio.com/appointmentInfor.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Userkey: this.keySecurity,
          UserName: this.userName,
          AppointmentTitle: title,
          AppointmentContent: content,
          day: this.dateOrder,
          time: this.timeOrder,
        }),
      })
        .then(() => {
          this.getAppointment();
          console.log('make appointment successful');
        })
        .catch((error) => {
          throw new Error(error);
        });
    },
    makeAppointment(day, time) {
      this.isVisibleMakeappointment = true;
      this.dateOrder = day.format("DD-MM-YYYY");
      this.timeOrder = time;
    },
    hiddenModal() {
      this.isVisibleMakeappointment = false;
    },
    logOut() {
      this.$store.commit("clearUser");
      this.$router.replace({ path: "/login" });
    },
    showInforUser() {
      this.$router.push({ path: "/Userinformation" });
    },
    getAppointment() {
      fetch("https://appointment-management-381708-default-rtdb.firebaseio.com/appointmentInfor.json", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((datas) => {
          for (var key in datas) {
            const value = datas[key].day + "_" + datas[key].time;
            if (!this.bookDateArray.includes(value)) {
              this.bookDateArray.push(value);
            }
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  computed: {
    userName() {
      return this.$store.getters.getUserName;
    },
    keySecurity() {
      return this.$store.getters.getKey;
    },
  },
  mounted() {
    this.getAppointment();
  },
};
</script>

<style scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
}

.rainbow-text {
  background-image: linear-gradient(
    to right,
    red,
    violet,
    green,
    yellow,
    orange
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}
</style>
