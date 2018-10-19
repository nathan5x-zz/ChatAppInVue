import Vue from "vue";

/**
 * SET_LOGGED_IN_USER
 * Updates the currently logged in user in the store
 *
 * @param {object} state - state object from the store
 *                          contains all the app data
 * @param {object} payload - Input to the state object
 *                          to be updated
 * @return {}
 */
const SET_LOGGED_IN_USER = (state, payload) => {
  Vue.set(state, "loggedInUser", payload.userInfo);
};

/**
 * SET_CHAT_ROOMS
 * Update the rooms object in the store
 *
 * @param {object} state - state object from the store
 *                          contains all the app data
 * @param {object} payload - Input to the state object
 *                          to be updated
 * @return {}
 */
const SET_CHAT_ROOMS = (state, payload) => {
  Vue.set(state, "rooms", payload);
};

/**
 * SET_ROOM_INFO
 * Update the current room info based on the 
 * mutation event that is being triggered when
 * switching between chat rooms.
 *
 * @param {object} state - state object from the store
 *                          contains all the app data
 * @param {object} payload - Input to the state object
 *                          to be updated
 * @return {}
 */
const SET_ROOM_INFO = (state, payload) => {
  Vue.set(state, "currentRoom", payload);
};

/**
 * SET_ROOM_MESSAGES
 * Update the currentRoomMessages to display
 * the selected room's messages
 *
 * @param {object} state - state object from the store
 *                          contains all the app data
 * @param {object} payload - Input to the state object
 *                          to be updated
 * @return {}
 */
const SET_ROOM_MESSAGES = (state, payload) => {
  Vue.set(state, "currentRoomMessages", payload);
};

/**
 * SET_REACTION_MESSAGE
 * Updates the existing room messages based on the 
 * new message received.
 *
 * @param {object} state - state object from the store
 *                          contains all the app data
 * @param {object} payload - Input to the state object
 *                          to be updated
 * @return {}
 */
const SET_REACTION_MESSAGE = (state, payload) => {
  if(null !== payload) {
    state.currentRoomMessages.push(payload);
  }  
};

export default { 
  SET_LOGGED_IN_USER,
  SET_CHAT_ROOMS,
  SET_ROOM_INFO,
  SET_ROOM_MESSAGES,
  SET_REACTION_MESSAGE
};
