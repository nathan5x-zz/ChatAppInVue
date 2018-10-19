<template>
  <transition name="app-fade" mode="out-in">
    <router-view></router-view>
  </transition>
</template>

<script>
  import Vue from "vue";

  Vue.filter('capitalize', function(value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
  });
  
  export default {
    created: function() {
  
    }
  };
</script>