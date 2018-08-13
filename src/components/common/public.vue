<template>
    <div>
        <p-header></p-header>
        <section class="publicMian ">
            <p-menu></p-menu>
            <router-view></router-view>
        </section>
        <footer class="footer">
            版权归石娟
        </footer>
    </div>
</template>

<script>
    import pHeader from './header';
    import pMenu from './menu';

    export default {
        components: {
            pHeader, pMenu,
        }

    }
</script>

<style scoped>

</style>
