<template>
    <div>
    
        <img src="./me.svg" width="200px" alt="img" />
    
        <div @submit.prevent="onLoginChlicked" class="login">
    
    
            <input class="login-element" type="text" placeholder="Username" v-model="username" v-bind:class="{ 'error-border': inputUsernameError }" />
            <div class="alert" v-if="showUsernameError" role="alert">
                Please enter the correct username
            </div><br>
    
            <input class="login-element" type="password" placeholder="Password" v-model="password" v-bind:class="{ 'error-border': inputPasswordError }" /><br>
    
            <div class="alert" v-if="showPasswordError" role="alert">
                Please enter the correct password
            </div>
    
            <button class="button" v-on:click="onLoginChlicked()" type="submit">Login</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "loginpage",
    props: {
        massage: String,
        showUsernameError: Boolean,
        showPasswordError: Boolean,
        inputUsernameError: Boolean,
        inputPasswordError: Boolean,
    },
    data() {
        return {
            username: "",
            password: "",

        }
    },
    methods: {

        onLoginChlicked() {

            const cachedUser = localStorage.getItem('username');
            const cachedPassword = localStorage.getItem('password');

            if (this.username !== cachedUser) {
                this.showUsernameError = true;
                this.inputUsernameError = true;
                this.message = 'Please enter the correct login details';
            } else if (this.password !== cachedPassword) {
                this.showUsernameError = false;
                this.inputUsernameError = false;
                this.showPasswordError = true;
                this.inputPasswordError = true;
                this.message = 'Please enter the correct login details';
            } else {
                this.$router.push("HomePage");
            }
        }
    }
}
</script>

<style lang="scss" scoped>
$mainColr: #424651;
$secuderColor: #A75432;
img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin: 25px auto;
    border: #A75432 5px solid;
    border-radius: 50%;
    -webkit-animation: rotation 15s infinite linear;
    @-webkit-keyframes rotation {
        from {
            -webkit-transform: rotate(0deg);
        }
        to {
            -webkit-transform: rotate(359deg);
        }
    }
}

.login {
    text-align: center;
    padding: 50px;
    background-color: $mainColr;
    border-top: $secuderColor 5px solid;
    border-bottom: $secuderColor 5px solid;
    .alert {
        color: white;
    }
    .login-element {
        padding: 5px;
        margin: 5px auto;
    }
}

button {
    position: relative;
    margin: 20px;
    background-color: transparent;
    border: none;
    padding: 6px;
    font-size: 0.7rem;
    color: #fff;
    font-size: 0.7rem;
    border-bottom: rgb(29, 27, 26) 0.1px solid;
    cursor: pointer;
}

button:hover {
    transition: border 0.2s;
    padding: 6px;
    color: #fff;
    border-bottom: none;
    border-bottom: #A75432 0.1px solid;
}

@media only screen and (max-width: 400px) {
    img {
        animation: none;
    }
}
</style>