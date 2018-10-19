<template>
    <section class="sidebar">
        <div class="profile">
            <h2 class="user"> {{userInfo.name | capitalize}} </h2>
            <label class="status"> {{status}} </label>
        </div>
    
        <ul class="rooms list">
            <li v-for="(room, key) in roomsList" v-bind:key="key" class="list-item" v-bind:class="{selected: room.id === selectedRoom.id}" v-on:click="loadRoom(room.id)">
                <span> {{room.name}}</span>
            </li>
        </ul>
    </section>
</template>

<script>
    import Vue from "vue";
    
    import {
        diffTimeStamps
    } from "utils/DateManager";
    
    export default {
        data: function() {
            return {
                status: "Logged in now",
                timer: "",
                interval: 10000
            }
        },
        computed: {
            userInfo() {
                return this.$store.getters.loggedInUser;
            },
            roomsList() {
                return this.$store.getters.rooms;
            },
            selectedRoom() {
                return this.$store.getters.selectedRoom;
            }
        },
    
        created: function() {
            // Update status every 10 secs
            let appInstance = this;
    
            this.timer = setInterval(function() {
                let _userInfo = appInstance.userInfo;
                let diff = diffTimeStamps(_userInfo.loggedTimeStamp);
    
                let seconds = Math.round(diff.seconds);
                let mins = Math.round(diff.mins);
    
                let statusText = seconds + " secs";
    
                if (mins >= 1) {
                    statusText = Math.round(diff.mins) + " min(s)";
                }
                appInstance.status = "Online for " + statusText;
            }, this.interval)
    
            this.$emit('scroll-to-bottom', {});
    
            if (this.roomsList && this.roomsList.length > 0) {
                this.loadRoom(this.roomsList[0].id);
            }
        },
        destroyed: function() {
            clearInterval(this.timer);
        },
        methods: {
            loadRoom(id) {
                this.$router.push({
                    path: '/rooms/' + id,
                    params: {
                        id: id
                    }
                });

                this.$emit('scroll-to-bottom', {});
            }
        }
    };
</script>