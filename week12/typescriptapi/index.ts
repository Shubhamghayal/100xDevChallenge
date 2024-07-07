// interface User{
//     name:string,
//     age:number,
//     email:string
// }


// // type UpdateProps=Pick<User,"name" |"age">

// // type partiallyupdatedProps=Partial<UpdateProps>
// type UpdateProps = Pick<User, 'name'> & Partial<Pick<User, 'age' | 'email'>>;


// function sumOfAge(user:UpdateProps){
//     return `${user.name} ${user.age}`
// }

// const users=sumOfAge({
//     name:"hsam",
   
// })

// console.log(users)


// interface User{
//     id:number
//     name:string,
// }

// type Users=Record<string, User>

// const users: Users = {
//     'abc123': { id: 2445, name: 'John Doe' },
//     'xyz789': { id: 4, name: 'Jane Doe' },
//   };
  
//   console.log(users['abc123']); // Output: { id: 'abc123', name: 'John Doe' }

interface User{
    id:string
    name:string,
}

const usersMap=new Map<string, User>();

// Add users to the map using .set
usersMap.set('abc123', { id: 'abc123', name: 'John Doe' });
usersMap.set('xyz789', { id: 'xyz789', name: 'Jane Doe' });

// Accessing a value using .get
console.log(usersMap.get('abc123')); // Output: { id: 'abc123', name: 'John Doe' }

