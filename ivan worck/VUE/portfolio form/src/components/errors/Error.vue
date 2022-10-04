<template>
    <div>
        <div v-if="message.status == 'sucsess'" class="bg-green-600 text-white py-3 px-5" >
            {{message.text}}
        </div>
        <div v-if="message.status == 'error'" class="bg-red-900 text-white py-3 px-5">
            {{message.text}}
        </div> 
    </div>
</template>
<script>
  
export default {
    name: 'Error',
    computed: {
        message() {
            return this.$store.getters.message;
        }
    }
}
</script>