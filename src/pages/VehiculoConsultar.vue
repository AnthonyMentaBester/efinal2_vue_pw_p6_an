<template>
  <NavBar/>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
export default {
  name: 'App',
  components: {
    NavBar,
  }
};
</script>

<style>

</style>
