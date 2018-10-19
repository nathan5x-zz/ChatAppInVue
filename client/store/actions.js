/** 
 *  API_SERVER is used to create HTTP Request
 *  URLs.
 *  
 *  @constant
 *  @type {string}
 *  @default
 */
const API_SERVER = "http://localhost:8080/api/";

/**
 * @function doLogin
 * 
 * Sends the user info to API server and updates
 * the user data object in the store. 
 * 
 * @param {Object} commit - method to commit mutation events
 *                          to update state objects
 * 
 * @param {Object} state - state object from the store
 *                         contains all the app data
 * 
 * @param {Object} payload - function to trigger other actions
 *                              with the payload
 * 
 * @return {}
 */
const doLogin = ({
  commit,
  state
}, payload) => {

  const loginRequest = new Request(API_SERVER + 'rooms/');

  fetch(loginRequest)
    .then(response => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error('Something went wrong on api server!');
      }
    })
    .then(response => {
      commit("SET_CHAT_ROOMS", response);
      commit("SET_LOGGED_IN_USER", payload);
    }).catch(error => {
      commit("SET_LOGGED_IN_USER", payload);
      commit("SET_CHAT_ROOMS", {});
    });
};

/**
 * @function getRoomInfo
 * 
 * Sends a GET request to API server and updates 
 * the room info in the store. Request object has
 * been created based on the selection from the 
 * sidebar inside the chatroom.
 * 
 * @param {Object} commit - method to commit mutation events
 *                          to update state objects
 * 
 * @param {Object} state - state object from the store
 *                         contains all the app data
 * 
 * @param {function} dispatch - function to trigger other actions
 *                              with the payload
 * 
 * @param {Object} payload - function to trigger other actions
 *                              with the payload
 * 
 * @return {}
 */
const getRoomInfo = ({
  commit,
  state,
  dispatch
}, payload) => {

  const roomRequest = new Request(API_SERVER + 'rooms/' + payload.id);

  fetch(roomRequest)
    .then(response => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error('Something went wrong on api server!');
      }
    })
    .then(response => {
      commit("SET_ROOM_INFO", response);
      dispatch({
        type: "getRoomMessages",
        id: payload.id
      });
    }).catch(error => {
      commit("SET_ROOM_INFO", {});
    });
};


/**
 * @function getRoomMessages
 * 
 * Sends a GET request to API server to get the 
 * room chat messages for the selected chat room.
 * 
 * @param {Object} commit - method to commit mutation events
 *                          to update state objects
 * 
 * @param {Object} state - state object from the store
 *                         contains all the app data
 * 
 * @param {Object} payload - function to trigger other actions
 *                              with the payload
 * 
 * @return {}
 */
const getRoomMessages = ({
  commit,
  state
}, payload) => {

  const msgRequest = new Request(API_SERVER + 'rooms/' + payload.id + '/messages');

  fetch(msgRequest)
    .then(response => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error('Something went wrong on api server!');
      }
    })
    .then(response => {
      commit("SET_ROOM_MESSAGES", response);
    }).catch(error => {
      commit("SET_ROOM_MESSAGES", {});
    });
};

/**
 * @function sendMessage
 * 
 * Creates a POST request with user entered message
 * and updates the Store's message object to display
 * the sent message in the chat window.
 * 
 * @param {Object} commit - method to commit mutation events
 *                          to update state objects
 * 
 * @param {Object} state - state object from the store
 *                         contains all the app data
 * 
 * @param {Object} payload - function to trigger other actions
 *                              with the payload
 * 
 * @return {}
 */
const sendMessage = ({
  commit,
  state
}, payload) => {

  const msgData = payload.msgData;
  const msgRequest = API_SERVER + 'rooms/' + msgData.roomId + '/messages';

  fetch(msgRequest, {
    method: 'post',
    body: JSON.stringify(msgData),
    headers: { "Content-Type": "application/json" }
  }).then(response => {      
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error('Something went wrong on api server!');
      }
    })
    .then(response => { 
      commit("SET_REACTION_MESSAGE", response);
    }).catch(error => {
      commit("SET_REACTION_MESSAGE", null);
    });
};

export default {
  doLogin,
  getRoomInfo,
  getRoomMessages,
  sendMessage
};
