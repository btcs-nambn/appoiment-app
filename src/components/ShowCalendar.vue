<template>
  <div class="grid grid-cols-8 w-full h-screen bg-slate-800">
    <div class="row-span-1 col-span-8 h-[100px] w-full">
      <div class="flex justify-center items-center h-full">
        <button
          class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 focus:ring-4 focus:outline-none focus:ring-red-100"
          @click="setStartDayOfPreviousWeeks">
          <span
            class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
            &#60;
          </span>
        </button>
        <div class="flex flex-col mr-3">
          <label class="p-2  bg-slate-500 rounded-lg shadow-inner"
            >{{ getFullDate(currentStartDayOfWeek) }}
          </label>
          <button
            class="relative inline-flex items-center justify-center p-0.5 ml-8 my-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 focus:ring-4 focus:outline-none focus:ring-red-100 w-[100px]"
            @click="backCurrentWeek">
            <span
              class="text-[12px] relative transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0 w-full h-full shadow-xl">
              Current Date
            </span>
          </button>
        </div>
        <button
          class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-3 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 focus:ring-4 focus:outline-none focus:ring-red-100"
          @click="setStartDayOfNextWeek">
          <span
            class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
            &#62;
          </span>
        </button>
      </div>
    </div>
    <!-- Body -->
    <div class="col-span-8 border bỏder-b-0 w-auto h-auto pr-3">
      <div class="grid grid-cols-8  h-full w-full">
        <div class=""></div>
        <div
          v-for="day in dayInWeek"
          :key="day"
          class="border flex items-center justify-center underline hover::text-xl hover:opacity-50 hover:text-blue-500 cursor-pointer transition ease-in-out duration-3 hover:text-sm hover:ring-4 h-[50px]"
          :class="{
            'text-red-400 bg-gradient-to-r from-red-500 via-red-200  font-bold':
              getDay(day) === 'Sun',
            'text-blue-400 bg-gradient-to-l from-blue-500 via-red-200 font-bold':
              getDay(day) === 'Sat',
          }">
          {{ getDay(day) }}
        </div>
        <div class=""></div>
        <div
          v-for="dayofweek in dayInWeek"
          :key="dayofweek"
          class="flex justify-center items-center border hover:opacity-50 hover:text-2xl"
          :class="{
            'text-red-400 bg-yellow-100 border-yellow-300 rounded-full  animate-pulse rainbow-text font-bold m-4 h-6 w-7 mx-auto border':
              isToday(dayofweek),
            'text-red-400 bg-gradient-to-r from-red-500 via-red-200 underline font-bold ':
              getDay(dayofweek) === 'Sun',
            'text-blue-400 bg-gradient-to-l from-blue-500 via-red-200 underline font-bold':
              getDay(dayofweek) === 'Sat',
          }">
          {{ getDate(dayofweek) }}
        </div>
        <div
          class="col-span-8 ">
          <div
            v-for="time in timeWorks"
            :key="time"
            class="time row-span-1 w-full border flex justify-between items-center p-3">
            <div
              class="border p-1 rounded-xl flex justify-center bg-slate-200 items-center underline text-blue-500">
              {{ time }}
            </div>
            <div
              v-for="day in dayInWeek"
              :key="day.clone().day"
              class="data flex justify-between items-center mr-2"
              :class="{
                'text-red-400 bg-gradient-to-r from-red-500 via-red-200 rounded-xl':
                  getDay(day) === 'Sun',
                'text-blue-400 bg-gradient-to-l from-blue-500 via-red-200 rounded-xl':
                  getDay(day) === 'Sat',
                'pointer-events-none bg-yellow-100': booksDate.includes(
                  formatDay(day) + '_' + time
                ),
              }"
              @click="chooseTime(day, time)">
              <button
                class="date border w-10 h-10 rounded-xl hover:opacity-80 hover:bg-orange-400 flex items-center justify-center">
                <img
                  class="h-7 w-7 ml-1 rounded"
                  src="https://cdn-icons-png.flaticon.com/512/1251/1251194.png" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "ShowCalendarComponent",
  emits: ["choose-time"],
  props: {
    booksDate: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      timeWorks: [
        "08:00",
        "09:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00",
        "19:00",
        "20:00",
      ],
      currentStartDayOfWeek: moment().startOf("week").format(),
    };
  },
  computed: {
    dayInWeek() {
      const momentStartDayOfWeek = moment(this.currentStartDayOfWeek);
      const dayInWeekArr = [];
      for (var i = 0; i < 7; i++) {
        const dayofweek = momentStartDayOfWeek.clone().add(i, "day");
        dayInWeekArr.push(dayofweek);
      }
      return dayInWeekArr;
    },
  },
  methods: {
    getFullDate(dateString) {
      return moment(dateString).format("MMMM Do YYYY");
    },
    getDate(momentDate) {
      return momentDate.format("DD");
    },
    getDay(momentDate) {
      return momentDate.format("ddd");
    },
    backCurrentWeek() {
      this.currentStartDayOfWeek = moment().startOf("week").format();
    },
    formatDay(momentDate) {
      return momentDate.format("DD-MM-YYYY");
    },

    setStartDayOfNextWeek() {
      this.currentStartDayOfWeek = moment(this.currentStartDayOfWeek)
        .add(7, "day")
        .format();
    },

    setStartDayOfPreviousWeeks() {
      this.currentStartDayOfWeek = moment(this.currentStartDayOfWeek)
        .subtract(7, "day")
        .format();
    },
    isToday(momentDate) {
      return momentDate.isSame(moment(), "day");
    },
    chooseTime(day, time) {
      this.$emit("choose-time", day, time);
    },
    getAppointment() {
      this.$emit("get-appointment");
    },
  },
  mounted() {
    this.getAppointment();
  },
};
</script>
