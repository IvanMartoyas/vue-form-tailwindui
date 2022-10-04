<template>
    <div class="Order__button">
        <MoscowButton></MoscowButton> <SPBButton></SPBButton>
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
<style lang="scss" scoped>
    .Order__button {
        display: flex;
        justify-content: start;
        align-items: center;
        padding: 0 25px;
        button {
            margin-right: 20px;
        }
    }
</style>