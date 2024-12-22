/*
  Use const when you can, and use let when you have to.
  This means that if you can initialize a variable when you declare it, 
  and don't need to reassign it later, make it a constant.
*/

const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"

//Avoid defining variable directly
accountCity = "Jaipur"

let accountState;

// accountId = 2 // not allowed

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])