<template>
  <div class="grid grid-cols-8 grid-rows-6 w-full h-screen bg-slate-700">
    <div class="row-span-1 col-span-8">
      <div class="mx-auto flex justify-center h-full mr-10">
        <button
          type="button"
          class="flex justify-center items-center ml-9 shadow-xl mt-[30px] w-[100px] h-[50px] rounded-xl border border-spacing-1 bg-purple-500 hover:opacity-50 hover:text-yellow-200 mr-4"
          @click="setStartDayOfPreviousWeeks">
          &#60;
        </button>
        <div class="relative">
          <input
            type="text"
            id="disabled_outlined"
            class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer h-20"
            disabled />
          <label
            for="disabled_outlined"
            class="absolute font-bold text-center text-clip text-xl text-gray-400 dark:text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 w-[220px] h-20 mt-5 ml-1 mr-1 bg-purple-200 rounded-lg flex items-center justify-center"
            >{{ getFullDate(currentStartDayOfWeek) }}
          </label>
          <button
            type="button"
            class="flex justify-center items-center ml-7 text-sm mt-2 w-32 h-6 rounded-xl border border-spacing-1 bg-purple-500 hover:opacity-50 hover:text-yellow-200 shadow-xl"
            @click="backCurrentWeek">
            Current Date
          </button>
        </div>
        <button
          type="button"
          class="flex justify-center items-center ml-1 mt-[30px] w-[100px] h-[50px] rounded-xl border border-spacing-1 bg-purple-500 hover:opacity-50 hover:text-yellow-200 shadow-xl"
          @click="setStartDayOfNextWeek">
          &#62;
        </button>
      </div>
    </div>
    <!-- Body -->
    <div class="a row-span-5 col-span-8 border w-full h-full pr-3">
      <div class="grid grid-cols-8 grid-rows-6 h-full w-full">
        <div class="col-span-1 row-span-1"></div>
        <div
          v-for="day in dayInWeek"
          :key="day"
          class="border flex items-center justify-center col-span-1 row-span-1 underline hover::text-xl hover:opacity-50 hover:text-blue-500 cursor-pointer transition ease-in-out duration-3 hover:text-sm hover:ring-4"
          :class="{
            'text-red-400 bg-gradient-to-r from-red-500 via-red-200 ':
              getDay(day) === 'Sun',
            'text-blue-400 bg-gradient-to-l from-blue-500 via-red-200':
              getDay(day) === 'Sat',
          }">
          {{ getDay(day) }}
        </div>
        <div class="col-span-1 row-span-1 border-t-0"></div>
        <div
          v-for="dayofweek in dayInWeek"
          :key="dayofweek"
          class="col-span-1 flex justify-center items-center border row-span-1 hover:opacity-50 hover:text-2xl"
          :class="{
            'text-red-400 bg-yellow-100 border-yellow-300 rounded-full border animate-pulse rainbow-text font-bold mt-8 h-10 w-10 mx-auto':
              isToday(dayofweek),
            'text-red-400 bg-gradient-to-r from-red-500 via-red-200 underline':
              getDay(dayofweek) === 'Sun',
            'text-blue-400 bg-gradient-to-l from-blue-500 via-red-200 underline':
              getDay(dayofweek) === 'Sat',
          }">
          {{ getDate(dayofweek) }}
        </div>
        <div
          class="col-span-8 row-span-4 border border-b-2 grid grid-row-4 overflow-auto">
          <div
            v-for="time in timeWorks"
            :key="time"
            class="time row-span-1 w-full border flex justify-between gap-x-2 items-center p-5">
            <div
              class="border w-20 h-10 rounded-xl flex justify-center items-center underline text-blue-500">
              {{ time }}
            </div>
            <div
              v-for="day in dayInWeek"
              :key="day.clone().day"
              class="data flex justify-between items-center"
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
                class="date border w-20 h-20 rounded-xl hover:opacity-80 hover:bg-orange-400 flex items-center justify-center">
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
      required:true
    }
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
