<template>
  <div class="grid grid-cols-8 grid-rows-6 w-full h-screen bg-gray-400">
    <div class="row-span-1 col-span-8">
      <div class="mx-auto flex justify-center h-full">
        <button
          type="button"
          class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 h-20 mt-4"
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
            class="flex justify-center items-center ml-9 mt-2 w-28 h-6 rounded-xl border border-spacing-1 bg-purple-500 hover:opacity-50 hover:text-yellow-200"
            @click="backNowWeek">
            CurrenDate
          </button>
        </div>
        <button
          type="button"
          class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ml-3 mt-4 h-20"
          @click="setStartDayOfWeek">
          &#62;
        </button>
      </div>
    </div>
    <!-- Body -->
    <div class="a row-span-5 col-span-8 border-2 w-full h-full pr-3">
      <div class="grid grid-cols-8 grid-rows-6 h-full w-full">
        <div class="col-span-1 row-span-1"></div>
        <div
          v-for="day in dayInWeek"
          :key="day"
          class="border flex items-center justify-center col-span-1 row-span-1 underline hover::text-xl hover:opacity-50 hover:text-blue-500 cursor-pointer transition ease-in-out duration-3 hover:text-sm"
          :class="{
            'text-red-400 bg-red-200': getDay(day) === 'Sun',
            'text-blue-400 bg-blue-200': getDay(day) === 'Sat',
          }">
          {{ getDay(day) }}
        </div>
        <div class="col-span-1 row-span-1 border border-b-2 border-t-0"></div>
        <div
          v-for="dayofweek in dayInWeek"
          :key="dayofweek"
          class="col-span-1 flex justify-center items-center border row-span-1 hover:opacity-50 hover:text-2xl"
          :class="{
            'text-red-400 bg-yellow-100 border-yellow-300 rounded-full border animate-pulse rainbow-text font-bold mt-8 h-10 w-10 mx-auto':
              isToday(dayofweek),
            'text-red-400 bg-red-200 underline': getDay(dayofweek) === 'Sun',
            'text-blue-400 bg-blue-200 underline': getDay(dayofweek) === 'Sat',
          }">
          {{ getDate(dayofweek) }}
        </div>
        <div
          class="col-span-8 row-span-4 border-2 border-b-2 grid grid-row-6 overflow-auto">
          <div
            v-for="time in timeWorks"
            :key="time"
            class="row-span-1 w-full border-2 flex justify-between gap-x-2 items-center p-5">
            <div class="border-2">{{ time }}</div>
            <div
              v-for="day in dayInWeek"
              :key="day.clone().day"
              class="flex justify-between items-center b"
              :class="{
                'text-red-400 bg-red-200': getDay(day) === 'Sun',
                'text-blue-400 bg-blue-200': getDay(day) === 'Sat',
              }"
              @click="chooseTime(day,time)">
              <button
                class="border-2 rounded-full w-10 h-10 border-red-300 bg-yellow-50 hover:opacity-80">
                <img class="h-7 w-7 ml-1 " src="https://as2.ftcdn.net/v2/jpg/01/79/12/07/1000_F_179120718_bQ8B8z5lPgf3SMizWsCY9412NBT5vMRM.jpg">
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
  emits:["choose-time"],
  data() {
    return {
      timeWorks: [
        " 08: 00 ",
        " 09: 00 ",
        " 10: 00 ",
        " 11: 00 ",
        " 12: 00 ",
        " 13: 00 ",
        " 14: 00 ",
        " 15: 00 ",
        " 16: 00 ",
        " 17: 00 ",
        " 18: 00 ",
        " 19: 00 ",
        " 20: 00 ",
      ],
      nowDateTime: moment().format("MMMM Do YYYY"),
      currentStartDayOfWeek: moment().startOf("week").format(),
    };
  },
  computed: {
    dayInWeek() {
      const momentStartDayOfWeek = moment(this.currentStartDayOfWeek);
      return [
        momentStartDayOfWeek,
        momentStartDayOfWeek.clone().add(1, "day"),
        momentStartDayOfWeek.clone().add(2, "day"),
        momentStartDayOfWeek.clone().add(3, "day"),
        momentStartDayOfWeek.clone().add(4, "day"),
        momentStartDayOfWeek.clone().add(5, "day"),
        momentStartDayOfWeek.clone().add(6, "day"),
      ];
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
    backNowWeek() {
      this.currentStartDayOfWeek = moment().startOf("week").format();
    },

    setStartDayOfWeek() {
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
  },
};
</script>
