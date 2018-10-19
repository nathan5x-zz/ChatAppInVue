<template>
    <footer class="footer compose-area">
        <textarea class="chatbox-textarea" name="message" rows="5" cols="100" placeholder="Type a message ..." v-model.trim="reactionMessage">
                                                        </textarea>
        <button name="send" type="button" class="send chatbox-button fixed" v-on:click="sendMessage()" :disabled="reactionMessage === '' ? true : false">
                                                    Send
                                                  </button>
    </footer>
</template>

<script>
    import Vue from "vue";

    export default {
        data: function() {
            return {
                reactionMessage: ""
            }
        },
        computed: {
            userInfo() {
                return this.$store.getters.loggedInUser;
            },
            selectedRoom() {
                return this.$store.getters.selectedRoom;
            }
        },
        methods: {
            sendMessage() {
                let messageData = {
                    name: this.userInfo.name,
                    message: this.reactionMessage,
                    roomId: this.selectedRoom.id
                }

                this.$store.dispatch({
                    type: "sendMessage",
                    msgData: messageData
                });

                this.reactionMessage = "";
                this.$emit('scroll-to-bottom', {});
            }
        }
    };
</script>