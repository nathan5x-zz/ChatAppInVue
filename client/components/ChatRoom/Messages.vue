<template>
    <section class="chat-area" ref="chatContainer">
        <transition-group name="msg-item" tag="div">
            <div v-for="(msg, key) in messages" v-bind:key="key" class="message" v-bind:class="[msg.name === userInfo.name ? 'sent' : 'received']">
                <p class="content"> {{msg.message}} </p>
                <h4 class="username"> {{msg.name}} </h4>
            </div>
        </transition-group>
    </section>
</template>

<script>
    import Vue from "vue";
    
    export default {        
        computed: {
            userInfo() {
                return this.$store.getters.loggedInUser;
            },
            messages() {
                return this.$store.getters.messages;
            }
        }
    };
</script>