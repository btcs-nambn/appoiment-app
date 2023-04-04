<template>
  <div
    class="flex justify-center items-center flex-col w-[300px] h-[400px] mt-0">
    <h2 class="mt-10 ml-10 font-mono text-black">Make Appointment</h2>
    <form class="mt-5" @submit.prevent="addAppointment">
      <label class="ml-10">Title :</label>
      <div class="relative flex">
        <input
          type="text"
          class="block ml-10 rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-xs text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          v-model="appointmentTitle" />
        <label
          class="absolute ml-10 text-xs text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
          >Title of Appointment</label
        >
      </div>
      <label
        class="block mb-2 ml-10 text-sm font-medium text-white dark:text-white"
        >Appointment Content :</label
      >
      <textarea
        rows="8"
        class="block p-2.5 w-full ml-10 text-xs text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Write your Appointment content here..."
        v-model="appointmentContent"></textarea>
      <button
        class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-xs font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 mt-5 ml-20"
        type="submit">
        <span
          class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Submit
        </span>
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
      this.$emit(
        "add-appointment",
        this.appointmentTitle,
        this.appointmentContent
      );
    },
  },
};
</script>
