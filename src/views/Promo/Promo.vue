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
        padding: 0 .6rem;
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
    
    @media screen and (max-width: 900px){
        .promo__content {
            h1 {
                font-size: 3rem;
            }
            h2 {
                font-size: 1.4rem;
            }
        }
    }
    @media screen and (max-width: 700px){
        .promo__content {
            h1 {
                font-size: 2.5rem;
            }
            h2 {
                font-size: 1.3rem;
            }
            button {
                margin-top: 4rem;
            }
        }
    }

    @media screen and (max-width: 600px){
        .promo__content {
            h1 {
                font-size: 2.3rem;
            }
            h2 {
                margin-top: 2rem;
                font-size: 1.2rem;
            }
            button {
                margin-top: 4rem;
            }
        }
    }

    @media screen and (max-width: 520px){
        .promo__content {
            h1 {
                font-size: 2.4rem;
                line-height: 150%;
            }
            h2 {
                line-height: 150%;
                font-size: 1.1rem;
            }
            button {
                margin-top: 3rem;
                width: 280px;
                height: 50px;
                border-radius: 40px;
                font-size: 1rem;
            }
        }
    }

    @media screen and (max-width: 400px){
        .promo__content {
            h1 {
                font-size: 2rem;
                line-height: 150%;
            }
        }
    }
</style>
