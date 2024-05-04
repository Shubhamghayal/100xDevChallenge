import { useState } from "react"

export function CreateTodo(){
    const[tittle,setTitle]=useState("")
    const[description,setDescription]=useState("")
return <div>
    <input style={{padding:10,margin:10}} type="text" placeholder="tittle" 
    onChange={(e)=>{
        const value=e.target.value;
        setTitle(value)
    }}/> <br />
    <input style={{padding:10,margin:10}} type="text" placeholder="description" onChange={(e)=>{
        const description=e.target.description;
        setDescription(description)
    }}/> <br />

    <button style={{padding:10,margin:10}} onClick={()=>{
        fetch("http://localhost:3000/todo",
    {
        method:"POST",
        body:JSON.stringify({
            tittle:tittle,
            description:description
        }),headers:{
            "contentType":"application/json"
        }
    }).then(async function(res){
        const json=await res.json()
        alert("todo added")
    })
    }}>Add a Todo</button>
</div>
}