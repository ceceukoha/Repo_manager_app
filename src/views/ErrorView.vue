<template>
    <div class="error-page">
        <h1>404</h1>
        <p>Oops!Page not found!</p><br>
        <router-link to="/" class="btn btn-primary">Go back home</router-link>
    </div>
</template>
<style>
    .error-page{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
    }
    .error-page h1{
        font-size: 200px;
        color: brown;
    }
</style>