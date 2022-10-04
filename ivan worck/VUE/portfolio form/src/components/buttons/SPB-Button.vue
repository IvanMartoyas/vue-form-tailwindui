<template>
    <div>
        <button @click="open_form" class="bg-success--darck inline-flex justify-center rounded-md border border-transparent  py-2 px-4 text-sm font-medium text-white shadow-sm">
          Заказать в Санкт-Петербург
        </button>

        <Button_form v-if="openForm" ></Button_form>
    </div>    
</template>
<script>

  import Button_form from '../forms/Button_form.vue'

  export default {
    name: 'SPB-Button',
    components: {
        Button_form
    },
    data() {
        return {
        }
    },
    methods: {
        open_form() {
            this.$store.dispatch("set_form_open", {open: true, sity: "Санкт-Петербург"})
        }
    },
    computed: {
        openForm() {
            return this.$store.getters.get_form_open;
        },
    }
  }
</script>