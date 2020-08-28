var userAges = [13, 18, 21, 27]
var subscriptionStatus = [true, true, false, false]


for(var index=0; index < 4; index++){
    var userAge = userAges[index];
    var isSubscribed = subscriptionStatus[index];
    
    if (userAge >=18  && isSubscribed) {
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
}