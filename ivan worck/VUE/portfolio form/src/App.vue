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

</style>
