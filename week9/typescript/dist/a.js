"use strict";
function isLegal(user) {
    if (user.age > 18) {
        console.log("great");
    }
    else {
        console.log("fuck off");
    }
}
isLegal({
    firstName: "harkirat",
    lastName: "singh",
    email: "email@gmail.com",
    age: 21
});
