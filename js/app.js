var userAge = 18;
var isSubscribed = true;

console.log(isSubscribed);
console.log(userAge);

if (userAge >= 18 && isSubscribed) {
    console.log("User is over 18 and is subscribed!");
} else if (userAge < 18 && isSubscribed) {
    console.log("User is under 18 and is subscribed!");
} else if (userAge >= 18 && !isSubscribed)  {
     console.log("User is 18 or older and is not subscribed!");
} else if (userAge < 18 && !isSubscribed)  {
      console.log("User is 18 or younger and is not subscribed!");
} else {
   console.log("Something went wrong!");
}
