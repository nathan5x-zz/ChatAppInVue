<template>
    <section id="login" class="login-view container">
        <img src="images/chatbanner.png" alt="Chat Banner" class="banner"/>
        <div class="login-ui">            
            <form name="loginForm" class="login-form">
                <div class="form-field">
                    <input type="text" v-model.trim="username" class="chatbox-input username" autocomplete="off" name="username" placeholder="Type your username..." v-on:keyup.enter="login()">
                </div>
                <input class="chatbox-button" type="button" :disabled="username === '' ? true : false" value="Join the Chat!" v-on:click="login()">
            </form>            
        </div>
    </section>
</template>

<script>
    export default {
        data: function() {
            return {
                username: ""
            };
        },
        computed: {
    
        },
        methods: {
            login() {
                let userInfo = {
                    name: this.username,
                    loggedTimeStamp: Date.now()
                }
    
                this.$store.dispatch({
                    type: "doLogin",
                    userInfo: userInfo
                });
    
                this.$router.push({
                    path: "/rooms"
                });
            }
        }
    };
</script>