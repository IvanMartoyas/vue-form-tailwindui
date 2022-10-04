<template>
    <div>
        <header>
            <div class="logo"></div>
        </header>
        <Error></Error>
        <main>
            <slot/>
        </main>
        <footer></footer>
    </div>
</template>
<script>

import  Error from "@/components/errors/Error.vue";

export default {
    name: 'Main',
    components: {
        Error
    },
    data() {
        return {

        }
    },
}
</script>