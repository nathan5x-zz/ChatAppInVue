<template>
    <div class="chatroom-view container">
        <ChatRoomSidebar v-on:scroll-to-bottom="chatScrollToBottom"> </ChatRoomSidebar>
        <section class="room">
            <ChatRoomHeader> </ChatRoomHeader>
            <ChatRoomMessages v-on:scroll-to-bottom="chatScrollToBottom"> </ChatRoomMessages>
            <ChatRoomFooter v-on:scroll-to-bottom="chatScrollToBottom"> </ChatRoomFooter>
        </section>
    </div>
</template>

<script>
        import Vue from "vue";
    
        import ChatRoomHeader from "components/ChatRoom/Header";
        import ChatRoomFooter from "components/ChatRoom/Footer";
        import ChatRoomMessages from "components/ChatRoom/Messages";
        import ChatRoomSidebar from "components/ChatRoom/Sidebar";
    
        export default {
            components: {
                ChatRoomHeader,
                ChatRoomFooter,
                ChatRoomMessages,
                ChatRoomSidebar
            },
            methods: {
                chatScrollToBottom() {
                    let chatContainer = document.querySelector('.chat-area');
                    if (chatContainer) {
                        chatContainer.scrollTo(0, chatContainer.scrollHeight);
                    }    
                }
            },
            watch: {
                '$route' (to, from) {
                    this.$store.dispatch({
                        type: "getRoomInfo",
                        id: this.$route.params.room_id
                    });
                }
            }
        };
</script>