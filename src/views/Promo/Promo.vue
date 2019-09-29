<template>
    <div class="promo">
        <p-navigation isDark></p-navigation>
        <div class="promo__content">
            <h1>НУМЕРОЛОГИЯ ОНЛАЙН</h1>
            <h2>Узнайте свою судьбу и измените её в лучшую сторону</h2>
            <router-link
                to="/register" 
                tag="button">
                Зарегистрироваться
            </router-link>
        </div>
    </div>
</template>
<script>
    import PNavigation from "@/components/PNavigation/PNavigation"
    export default {
        components: {
            PNavigation
        },
    }
</script>
<style lang="scss" scoped>
    @import "@/assets/css/variables.scss";

    .promo {
        background-image: url("../../assets/images/promo_background.jpg");
        background-position: center;
        background-size: cover;
        height: 100vh;
        font-family: 'Comfortaa', sans-serif;
        color: #fff;
    }

    .promo__content {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 100%;
        text-align: center;

        h1 {
            font-size: 4rem;
        }

        h2 {
            margin-top: 3.25rem;
            font-size: 1.5rem;
        }

        button {
            margin-top: 5rem;
            @include input_reset();
            background-color: #FF4A43;
            width: 300px;
            height: 60px;
            border-radius: 40px;
            font-size: 1.125rem;
        }
    }

</style>
