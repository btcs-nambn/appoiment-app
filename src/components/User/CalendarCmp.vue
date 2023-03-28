<template>
  <div class="">
    <div class="container mx-auto mt-10 border-3">
      <div class="wrapdiv grid grid-cols-10 border-3 shadow-xl">
        <div class="wrapper bg-white rounded shadow w-full col-span-10">
          <!-- Row 1 -->
          <div class="header flex justify-between border-b p-2">
            <span class="text-lg font-bold"> {{ new Date(Date.now()) }}</span>
            <div class="buttons">
              <button class="p-1" @click="previousDate">
                <svg
                  width="3em"
                  fill="gray"
                  height="3em"
                  viewBox="0 0 16 16"
                  class="bi bi-arrow-left-circle"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path
                    fill-rule="evenodd"
                    d="M8.354 11.354a.5.5 0 0 0 0-.708L5.707 8l2.647-2.646a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708 0z" />
                  <path
                    fill-rule="evenodd"
                    d="M11.5 8a.5.5 0 0 0-.5-.5H6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5z" />
                </svg>
              </button>
              <button class="p-1" @click="nextDate">
                <svg
                  width="3em"
                  fill="gray"
                  height="3em"
                  viewBox="0 0 16 16"
                  class="bi bi-arrow-right-circle"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path
                    fill-rule="evenodd"
                    d="M7.646 11.354a.5.5 0 0 1 0-.708L10.293 8 7.646 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0z" />
                  <path
                    fill-rule="evenodd"
                    d="M4.5 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z" />
                </svg>
              </button>
            </div>
          </div>
          <!-- Row-2 -->
          <table class="w-full h-[100px]">
            <div class="grid grid-cols-11">
              <div class="col-span-8">
                <div class="Day">
                  <tr>
                    <th
                      class="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                      Sunday
                    </th>
                    <th
                      class="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                      Monday
                    </th>
                    <th
                      class="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                      Tuesday
                    </th>
                    <th
                      class="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                      Wednesday
                    </th>
                    <th
                      class="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                      Thursday
                    </th>
                    <th
                      class="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                      Friday
                    </th>
                    <th
                      class="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                      Saturday
                    </th>
                  </tr>
                </div>
                <!-- Row 3 -->
                <div>
                  <tr class="text-center h-20">
                    <td
                      class="border p-1 h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                      <span class="text-gray-500">1</span>
                    </td>
                    <td
                      class="border p-1 h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                      <span class="text-gray-500">2</span>
                    </td>
                    <td
                      class="border p-1 h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                      <span class="text-gray-500">3</span>
                    </td>
                    <td
                      class="border p-1 h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                      <span class="text-gray-500">4</span>
                    </td>
                    <td
                      class="border p-1 h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                      <span class="text-gray-500">6</span>
                    </td>
                    <td
                      class="border p-1 h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-hidden transition cursor-pointer duration-500 ease hover:bg-gray-300">
                      <span class="text-gray-500">7</span>
                    </td>
                    <td
                      class="border p-1 h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                      <span class="text-gray-500 text-sm">8</span>
                    </td>
                  </tr>
                </div>
              </div>
            </div>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import moment from "moment";
export default {
  data() {
    return {
      currentDate: moment().format("MMMM Do YYYY"),
    };
  },

  mounted() {},

  methods: {
    nextDate() {
      //   const current = new Date();
      //   return (this.currentDate = `${
      //     current.getDate() + 1
      //   }/${current.getMonth()}/${current.getFullYear()}`);
    },
    previousDate() {
      //   const current = new Date();
      //   var pre = (this.currentDate = `${
      //     current.getDate() - 1
      //   }/${current.getMonth()}/${current.getFullYear()}`);
      //   return (this.currentDate = pre);
    },
  },
};
</script>
