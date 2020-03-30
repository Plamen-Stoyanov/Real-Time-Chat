// make a collection
let users = [];

// Join user to chat
function userJoin(id, username, room){
    const user = { id, username, room }

    // add the new user to the collection
    users.push(user);

    // return the user who have joined
    return user;
}

// Get current user
function getCurrentUser(id) {
    return users.find(user => user.id === id);
}

// User leaves chat
function userLeave(id) {
    const index = users.findIndex(user => user.id === id);

    // returning the user only, not the whole array
    if(index !== -1){
        return users.splice(index, 1)[0];
    }
}

// Get room users
function getRoomUsers(room) {
    return users.filter(user => user.room === room);
}

module.exports = {
    userJoin,
    getCurrentUser,
    userLeave,
    getRoomUsers
};