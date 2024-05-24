
import{ useState, useEffect } from 'react';

import './App.css'

function App() {


  return (
    <>
      <MyComponent/>
    </>
  )
}


function MyComponent() {
  const[count,setCount]=useState(0)
  useEffect(() => {
    console.log("mounted")

    return () => {
      console.log("un mounted")

    };
  }, [count]);

  return <div>

    <div>{count}</div>
    <button onClick={()=>{
      setCount(count+1)
    }}>increate</button>
  </div>
}

export default App
