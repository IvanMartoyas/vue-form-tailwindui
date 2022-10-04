<template>
    <div>
        <div class="Order__button">
            <MoscowButton></MoscowButton> <SPBButton></SPBButton>

            <button @click="overview = !overview" class="rounded py-2 ml-6 px-5 bg-gray-600 text-white">Описание проекта</button>
        </div>
        <Overview v-if="overview"></Overview>
    </div>
</template>
<script>
    import MoscowButton from './Moscow-Button.vue';
    import SPBButton from './SPB-Button.vue';
    import Overview from '@/components/Overview';
    
    export default {
      name: 'App',
      components: {
        MoscowButton,
        SPBButton,
        Overview
        },
        data() {
            return {
                overview: false
            }
        },
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