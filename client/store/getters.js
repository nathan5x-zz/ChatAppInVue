/**
 * loggedInUser
 * Returns the "loggedInUser" of the user
 * that is currently logged in / joined.
 *
 * @param {Object} state - state object from the store
 *                          contains all the app data
 * @return {Object}
 */
const loggedInUser = state => state.loggedInUser;

/**
 * rooms
 * Returns the "rooms" list to update the 
 * list of available rooms to chat.
 *
 * @param {Object} state - state object from the store
 *                          contains all the app data
 * @return {Object}
 */
const rooms = state => state.rooms;

/**
 * selectedRoom
 * Returns the selected room object to manage the
 * selected room info inside the chat room.
 *
 * @param {Object} state - state object from the store
 *                          contains all the app data
 * @return {Object}
 */
const selectedRoom = state => state.currentRoom;

/**
 * messages
 * Returns the "messages" data to render the chat room's
 * message area section.
 *
 * @param {Object} state - state object from the store
 *                          contains all the app data
 * @return {Object}
 */
const messages = state => state.currentRoomMessages;

export default {
    loggedInUser,
    rooms,
    selectedRoom,
    messages
};