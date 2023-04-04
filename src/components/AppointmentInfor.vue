<template>
  <div
    class="flex justify-center items-center flex-col w-[400px] h-[400px] mt-0 bg-slate-400 z-50 rounded-xl shadow-xl">
    <h2 class="mt-10 ml-10 text-black">Make Appointment</h2>
    <form class="mt-3 mr-7" @submit.prevent="addAppointment">
      <label class="ml-12">Title :</label>
      <div class="relative flex">
        <input
          type="text"
          class="block ml-10 rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-xs text-gray-900 bg-gray-50 border border-b-1 border-gray-300 appearance-none focus:ring-0 focus:border-blue-600 peer"
          v-model="appointmentTitle"
          placeholder="Title of Appointment" />
      </div>
      <label class="block mt-2 mb-2 ml-12 text-sm font-medium"
        >Appointment Content :</label
      >
      <textarea
        rows="8"
        class="block p-2.5 ml-10 text-xs text-gray-900 bg-gray-50 rounded-xl border border-gray-300 w-[300px] h-[150px] focus:ring-blue-500 focus:border-blue-500 overflow-auto max-h-[150px] min-h-[150px]"
        placeholder="Write your Appointment content here..."
        v-model="appointmentContent"></textarea>
      <button
        class="relative inline-flex items-center justify-center p-0.5 mr-2 overflow-hidden text-xs font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 focus:ring-4 focus:outline-none focus:ring-red-100 mt-3 ml-[140px] mb-5"
        type="submit">
        <span
          class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
          Submit
        </span>
      </button>
      <button
        class="underline text-sm text-blue-800"
        type="button"
        @click="hiddentModal">
        Hidden
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "AppointmentInfor",
  emits: ["add-appointment"],
  data() {
    return {
      appointmentTitle: "",
      appointmentContent: "",
    };
  },
  methods: {
    addAppointment() {
      if (this.appointmentTitle == "") {
        alert("Please enter a title of Appointment");
      } else if (this.appointmentContent == "") {
        alert("Please enter a content of Appointment");
      } else {
        this.$emit(
          "add-appointment",
          this.appointmentTitle,
          this.appointmentContent
        );
      }
    },
    hiddentModal() {
      this.$emit("hiden-modal");
    }
  },
};
</script>
