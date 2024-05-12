import { useEffect, useMemo, useState } from 'react'
import './App.css'
import axios from "axios"


// function App() {
//   const [todos, setTodos] = useState([]);

//   useEffect(()=>{
//     axios.get("https://sum-server.100xdevs.com/todos")
//     .then(function(response){
//       setTodos(response.data.todos)
//     })
//   },[])


//   return (
//     <>
//       {todos.map((todo)=><Todo key={todo.id} title={todo.title} description={todo.description}></Todo>)}
//     </>
//   )

//   function Todo({title,description}){
//     return <div>
//       <h1>{title}</h1>
//       <p>{description}</p>
//     </div>

//   }
// }










// function App() {
//   const[iid,setId]=useState(1)

//   return (
//   <div>

//     <button onClick={()=>setId(1)}>1</button>
//     <button onClick={()=>setId(2)}>2</button>
//     <button onClick={()=>setId(3)}>3</button>
//     <button onClick={()=>setId(4)}>4</button>
//     <Todo id={iid}/>
//   </div>
//   )}
// function Todo({id}){
// const [todo, setTodos]=useState({})

// useEffect(()=>{
//   axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
//   .then((response)=>{
//     setTodos(response.data.todo)
//   })
// },[id])

// return <div>
//   <h1>{todo.title}</h1>
//   <h4>{todo.description}</h4>
// </div>

// }













function App() {
const[inputValue,setinputValue]=useState(0)
const[counter,setCounter]=useState(0)
const[count,setCount]=useState(0)

// let count=useMemo(()=>{
//   let finalcount=0
//   console.log("into mermo")
//   for(let i=1;i<=inputValue;i++){
//     finalcount=finalcount+i
//   }
//   return finalcount
// },[inputValue])

useEffect(()=>{
    let finalcount=0
    console.log("into mermo")
    for(let i=1;i<=inputValue;i++){
      finalcount=finalcount+i
    }
    setCount(finalcount)
  },[inputValue])

 
  return (
  <div>
   <input type="number" onChange={(e)=>setinputValue(e.target.value)}/>
   <div>sum of 1 to {inputValue} is {count}</div>
   <button onClick={()=>setCounter(counter+1)}> counter {counter}</button>

  
  </div>
    )}

export default App
