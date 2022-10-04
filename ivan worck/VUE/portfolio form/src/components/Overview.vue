<template>
    <section class="max-w-[1200px]">
        
        <h1 class="text-5xl text-gray-900 dark:text-white mb-8 font-bold">Описание</h1>

        <p>В качестве css фреймворка использовался tailwindcss. </p>    
        <p>Для хранения данных и доступ к ним использовал vuex. </p>    
        <p>Для работы по сети подключить axios, запрос делается во vuex</p>  

        <h2 class="mt-4 text-3xl text-gray-900 dark:text-white mb-4 font-bold">Вывод кода</h2>
        <p>Основной скелет со структурой я указывал в отдельном файле layout/Main </p>

        <h2 class="mt-4 text-3xl text-gray-900 dark:text-white mb-4 font-bold">Вывод сообщений</h2>
        <p>Вывод сообщений реализован во vuex в отдельным модуле, также 
            для вывода представления используется отдельный компонент подключается в layout </p>    
    </section>
</template>
<style  scoped>
    section {
        margin: 0 auto;
    }
</style>