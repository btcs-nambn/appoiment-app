<template>
    <calendar-cmp></calendar-cmp>
</template>

<script>
import CalendarCmp from './components/User/Calendar-Ui.vue';

export default {
  name: 'App',
  components: {
    CalendarCmp
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
