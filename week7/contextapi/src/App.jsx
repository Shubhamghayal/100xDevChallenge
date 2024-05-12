import { useContext, useState } from 'react'
import{CounterContext}from './context'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        
        <CounterContext.Provider value={count}>
            <Count setCount={setCount}></Count>
           

        </CounterContext.Provider>

        
        
      </div>
    </>
  )}

  function Count({setCount}){
    
    return <div>
       <CountRender></CountRender>
        <Button setCount={setCount}></Button>
    </div>
  }

  function CountRender()
{const count=useContext(CounterContext)
  return <div>
    {count}
  </div>
}
  function Button({setCount}){
    const count=useContext(CounterContext)
    return <div>

      <button onClick={()=>setCount(count+1)}>increase count</button>
      <button onClick={()=>setCount(count-1)}>decrease count</button>
    </div>
  }



export default App
