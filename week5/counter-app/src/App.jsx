import { useState } from "react"

function App() {
  const[todos,setTodo]=useState([{
  tittle:"go to gym",
  desc:"6to7"
  },
{
  tittle:"read book",
  desc:"9to10"
}])

function addTodo(){
setTodo([...todos,{
  tittle:"gofor lunch",
  desc:"at 2 o clock"
}])
}
  
  return(
    <div>
      <button onClick={addTodo}>Add TODO</button>
      {
        todos.map(function(todo){
          return<Todo tittle={todo.tittle} desc={todo.desc}></Todo>
        })
      }
    </div>
  )
}

function Todo(Props){

  return <div>
    {Props.tittle}
    {Props.desc}
  </div>
  
}

export default App
