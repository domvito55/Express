//Default
function add(x, y = 0) {
    return x + y;
}
console.log(add(1));
console.log(add(1,2));

//Rest
// The Rest feature allows you to pass an array as trailing
// arguments as follows:
function userFriends(user, ...friends) {
    console.log(user + ' has ' + friends.length + ' friends');
}
userFriends('User', 'Bob', 'Alice');

// The Spread feature turns an array into a call argument:
function userTopFriends(firstFriend, secondFriend,
thirdFriends) {
    console.log(firstFriend);
    console.log(secondFriend);
    console.log(thirdFriends);
}
userTopFriends(...['Alice', 'Bob', 'Michelle']);
