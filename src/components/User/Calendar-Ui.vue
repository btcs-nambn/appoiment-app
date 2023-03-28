<template>
  <div>
    <div class="bg-gray-200 h-auto w-[700px] mx-auto rounded-xl">
      <div>
        <label>{{ currenDate }}</label>
      </div>
      <div class="grid grid-cols-8 mt-10 text-center gag-1">
        <button
          className="rounded-sm bg-gradient-to-br from-[#4481EB] to-[#04BEFE] px-5 py-3 text-base font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-[#4481EB]/50">
          Time
        </button>
        <button
          className="rounded-sm bg-gradient-to-br from-[#4481EB] to-[#04BEFE] px-5 py-3 text-base font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-[#4481EB]/50">
          Sun
        </button>
        <button
          className="rounded-sm bg-gradient-to-br from-[#4481EB] to-[#04BEFE] px-5 py-3 text-base font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-[#4481EB]/50">
          Mon
        </button>
        <button
          className="rounded-sm bg-gradient-to-br from-[#4481EB] to-[#04BEFE] px-5 py-3 text-base font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-[#4481EB]/50">
          Tue
        </button>
        <button
          className="rounded-sm bg-gradient-to-br from-[#4481EB] to-[#04BEFE] px-5 py-3 text-base font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-[#4481EB]/50">
          Web
        </button>
        <button
          className="rounded-sm bg-gradient-to-br from-[#4481EB] to-[#04BEFE] px-5 py-3 text-base font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-[#4481EB]/50">
          Thu
        </button>
        <button
          className="rounded-sm bg-gradient-to-br from-[#4481EB] to-[#04BEFE] px-5 py-3 text-base font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-[#4481EB]/50">
          Fri
        </button>
        <button
          className="rounded-sm bg-gradient-to-br from-[#4481EB] to-[#04BEFE] px-5 py-3 text-base font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-[#4481EB]/50">
          Sat
        </button>
      </div>
      <div class="body grid grid-rows-8 bg-green-200 w-full h-[250px] grid-cols-8 gap-2">
        <div class="h-full col-span-1 border-2">
          <div>8:00</div>
          <div>9:00</div>
          <div>10:00</div>
          <div>11:00</div>
          <div>12:00</div>
          <div>13:00</div>
          <div>14:00</div>
          <div>15:00</div>
          <div>16:00</div>
          <div>17:00</div>
        </div>
        <div class="col-span-7 ">
            <div class="">1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div>10</div>
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
      currenDate: moment().format("MMMM Do YYYY"),
    };
  },

  mounted() {},

  methods: {},
};
</script>
