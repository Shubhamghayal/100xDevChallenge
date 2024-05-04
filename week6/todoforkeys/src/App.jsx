import { useState } from 'react'
import './App.css'
// let count=4
// function App() {
//   const[todos,setTodos]=useState([{
//     id:1,
//     title:"FKAU",
//     desc:"fUEFBUFBBbfie"
//   },{
//     id:2,
//     title:"FKAU",
//     desc:"fUEFBUFBBbfie"
//   },{
//     id:3,
//     title:"FKAU",
//     desc:"fUEFBUFBBbfie"
//   }])

//   function addTodo(){
//     setTodos([...todos,{
//       id:count++,
//       title:"FSFDS",
//       desc:"afhosigvphcbs0"
//     }])
//   }
//   return (
//     <>
//     <button onClick={addTodo}>Add todo</button>
//     {todos.map((todo)=><Todo key={todo.id} title={todo.title} desc={todo.desc}></Todo>)}

//     </>
//   )

// }
// function Todo({title,desc}){
//   return(
//     <div>
//     <h1>{title}</h1>
//     <h1>{desc}</h1>
//     </div>
    
//   )
// }
function App() {
  return (
        <>    

        {/* <CardWrapper innerComponent={<TextComponent/>}></CardWrapper> */}
        <CardWrapper>
            hi tgere
            <CardWrapper>
           fuck it
        </CardWrapper>
        </CardWrapper>
        <CardWrapper>
           hey you
        </CardWrapper>
        
         

         </> 
         
        )}

function CardWrapper({children}){
return (<div
 style={{border:"2px solid black", padding:20}}>
  {children}
</div>
)
}

// function TextComponent (){
//   return <div>
//     hi there
//   </div>
// }

  


export default App
