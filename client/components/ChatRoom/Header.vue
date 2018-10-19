<template>
    <header class="header">
        <h1 class="title"> {{selectedRoom.name}} </h1>
        <h3 class="users">
            <span v-for="(user, key) in selectedRoom.users" v-bind:key="key" v-bind:class="{current: user === userInfo.name}"> {{user | capitalize}}</span>
        </h3>
    </header>
</template>

<script>    
    import Vue from "vue";

    export default {
        data: function() {
            return {
               
            }
        },
        computed: {
            userInfo() {
                return this.$store.getters.loggedInUser;
            },
            selectedRoom() {
                return this.$store.getters.selectedRoom;
            }
        }
    };
</script>