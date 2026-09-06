// Object literals 

const mySym = Symbol("key1")

const JsUser ={
      name: "zaid",
      mySym: "mykey1",
      age: 20,
      email: "zaidkhan@.com",
      location: "latur ",
      isLoggedIn: false,
      lastLoginDays: ["Monday", "Tuesday", "Wednesday"]

}
 
//console.log(JsUser.email);
console.log(JsUser ["email"]);
console.log(["location"]);
console.log(["name"]);
console.log(JsUser.mySym);

