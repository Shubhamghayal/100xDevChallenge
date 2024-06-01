// interface User {
// 	firstName: string;
// 	lastName: string;
// 	email: string;
// 	age: number;
// }


// function isLegal(user:User){
//     if(user.age>18){
//         console.log("great")
//     }else{
//         console.log("fuck off")
//     }
// }

// isLegal({
//     firstName: "harkirat",
// 	lastName: "singh",
// 	email: "email@gmail.com",
// 	age: 21
// })


function dosomething<T>(arg:T[]){
	return arg

}
const arr1=dosomething(["sham","ram"])
console.log(arr1.toLowerCase())


