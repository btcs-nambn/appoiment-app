<template>
  <div>
    <router-link to="./"></router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import { RouterLink,RouterView } from 'vue-router';

export default {

  components: {
    RouterLink,
    RouterView
  },
}
</script>
