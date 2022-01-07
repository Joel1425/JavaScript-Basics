const fetch = require("node-fetch");
console.log("Start");
setTimeout(function(cb){
    console.log("Callback 5000");
},5000);
setTimeout(function(cb){
    console.log("Callback 2000");
},2000);
let url = "https://replit.com/languages/go";
fetch(url)
.then(function(cb){
    console.log("Replit Back");
});
console.log("End");
