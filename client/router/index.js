import Vue from "vue";
import Router from "vue-router";

import LoginView from "../views/LoginView";
import ChatRoomView from "../views/ChatRoomView";

Vue.use(Router);

/**
  * Router configs to load the component based on the URL 
  */
export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: LoginView
    },
    {
      path: "/rooms",
      component: ChatRoomView
    },
    {
      path: "/rooms/:room_id",
      component: ChatRoomView
    },
    {
      path: "/rooms/:room_id/messages/",
      component: ChatRoomView
    }
  ]
});
