<template>
  <div id="app">
    <layout>
      <Order></Order>
    </layout>
  </div>
</template>

<script>
import layout from '@/layout/Main.vue'
import Order from '@/components/buttons/Order.vue'

export default {
  name: 'App',
  components: {
    layout,
    Order
  }
}
</script>

<style lang="scss">
  @import './assets/css/output.css';
  
  .bg-primary {
    background: #3B82F6!important;
  }
  .bg-success {
    background: #28a745!important;
  }
  .bg-success--darck {
    background: #0D9488!important;
  }
</style>
