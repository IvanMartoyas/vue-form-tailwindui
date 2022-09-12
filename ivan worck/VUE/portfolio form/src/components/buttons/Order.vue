<template>
    <div>
        <SPBButton></SPBButton><MoscowButton></MoscowButton>
    </div>
</template>
<script>
    import MoscowButton from './Moscow-Button.vue';
    import SPBButton from './SPB-Button.vue';
    
    export default {
      name: 'App',
      components: {
        MoscowButton,
        SPBButton
      }
    }
</script>