// const tinderUser = new Object

const tinderUser = {}
tinderUser.id = "123zaid"
tinderUser.name = "zaid"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
 
    email: "zaidkhan2.com",
   
    fullName: {
    
        UserfullName: {
      
       FirstName: "zaid",
       lastName: "khan" 
    }
}
}
//console.log(regularUser);

const obj1 ={1: "a", 2: "b"}
const obj2 ={3: "c", 4: "d"}

//const obj3 = {obj1, obj2 }
//const obj3 = Object.assign(obj1, obj2);

const obj3 = {...obj1, ...obj2 };
//console.log (obj3);

const users = [
{
     id: 1,
     email:  "zaid2gmail.com"
},
{
    id: 1,
    email: "zaid@gmail.com"
}
]



    users[1].email
console.log(tinderUser);

//console.log(Object.keys(tinderUser));
//console.log(Object.values(tinderUser));
//console.log(Object.entries(tinderUser));
