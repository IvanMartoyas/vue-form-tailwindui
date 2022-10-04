<template>
   <div>
 
        <div class="px-4 py-3 text-right sm:px-6">
            <button  @click="open_form" class="font-bold bg-primary inline-flex justify-center rounded-md border border-transparent  py-2 px-4 text-sm font-medium text-white shadow-sm">
                Заказать в Москву
            </button>
        </div>

        <Button_form v-if="openForm"></Button_form>
      
   </div>
</template>

<script>

    import Button_form from '../forms/Button_form.vue'

    export default {
        name: 'Moscow-Button',
        components: {
            Button_form
        },
        data() {
            return {
            }
        },
        methods: {
            open_form() {
                this.$store.dispatch("set_form_open", {open: true, sity: "Москва"})
            }
        },
        computed: {
            openForm() {
                return this.$store.getters.get_form_open;
            },
        }
    }
</script>

