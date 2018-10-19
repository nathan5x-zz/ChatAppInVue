import Vuex from 'vuex';
import Vue from 'vue';

import actions from './actions';
import getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);

/** 
 *  Store contains all the state objects required 
 *  for the app.
 * 
 *  @constant
 *  @type {Vuex.Store}
 *  @default
 */
const store = new Vuex.Store({
  state: {
    loggedInUser: {
      name: "Name",
      loggedTimeStamp: ""
    },
    rooms: [],
    currentRoom: {},
    currentRoomMessages: []
  },
  actions: actions,
  getters: getters,
  mutations: mutations
});

export default store;