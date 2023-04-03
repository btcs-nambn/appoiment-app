<template>
  <div
    class="w-[1100px] h-[650px] mx-auto mt-12 border rounded-3xl text-white border-spacing-3 shadow-2xl grid grid-rows-6 bg-slate-300">
    <div class="row-span-1 w-full pr-5">
      <p
        class="text-center flex justify-center items-center animate-pulse rainbow-text font-bold text-4xl mt-5">
        Make Appointment Managerment
      </p>
      <p class="text-black flex justify-end items-end hover:text-blue-400">
        User Name
      </p>
      <a
        class="text-black flex justify-end items-end hover:text-blue-400"
        href="#"
        >Log Out</a
      >
    </div>
    <div class="row-span-5 w-full grid grid-cols-3 grid-rows-6">
      <div class="col-span-2 row-span-6 overflow-auto">
        <show-calendar @choose-time="makeAppointment"></show-calendar>
      </div>
      <div class="col-span-1 row-span-6 border">
        <appointment-infor
          @addAppointment="addAppointment"
          v-if="isVisibleMakeappointment"></appointment-infor>
      </div>
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
      isVisibleMakeappointment: false,
      timeEvent: [],
      apiMakeAppointment:
        "https://appointment-management-381708-default-rtdb.firebaseio.com/appointmentInfor.json",
    };
  },
  methods: {
    addAppointment(title, content) {
      this.isVisibleMakeappointment = false;
      fetch(this.apiMakeAppointment, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName: "Demo User",
          appointmentTitle: title,
          appointmentContent: content,
          time:this.timeEvent
        }),
      }).catch((error) => {
        // Xử lý lỗi
        throw new Error(error);
      });
    },
    makeAppointment(day, time) {
      this.isVisibleMakeappointment = true;
      this.timeEvent.push(time, day);
      console.log(this.timeEvent);
    },
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
    purple,
    blue,
    green,
    yellow,
    orange
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}
</style>
