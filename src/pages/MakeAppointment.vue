<template>
  <div class="relative">
    <div
      class="w-screen h-[700px] border text-white grid grid-rows-6 bg-slate-400">
      <div class="row-span-1 w-full pr-5 flex justify-center items-center border">
        <p
          class="text-center animate-pulse rainbow-text font-bold text-4xl mt-5 ">
          Make Appointment Managerment
        </p>
      </div>
      <div class="row-span-5 overflow-auto">
        <show-calendar @choose-time="makeAppointment"></show-calendar>
      </div>
    </div>

    <div
      v-if="isVisibleMakeappointment"
      class="flex justify-center items-center z-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <appointment-infor @add-appointment="addAppointment"
      @hidenshow="show"></appointment-infor>
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
      dateOrder: "",
      timeOrder: "",
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
          date: this.dateOrder,
          time: this.timeOrder,
        }),
      }).catch((error) => {
        throw new Error(error);
      });
    },
    makeAppointment(day, time) {
      this.isVisibleMakeappointment = true;
      this.dateOrder = day.format("DD-MM-YYYY");
      this.timeOrder = time;

    },
    show(bool) {
      this.isVisibleMakeappointment = bool;
    }
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
