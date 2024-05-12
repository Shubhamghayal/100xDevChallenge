
import { useState } from 'react'
import './App.css'

import { countAtom, evenSelector } from './store/atoms/count.jsx'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'

function App() {

  return (
    <>
      <div>
        <RecoilRoot>
        <Count></Count>

        </RecoilRoot>
            

      </div>
    </>
  )}

  function Count(){
    
    return <div>
       <CountRender></CountRender>
        <Button></Button>
        <Even></Even>
    </div>
  }

  function CountRender() {
    const count=useRecoilValue(countAtom)
  return <div>
    {count}
  </div>

}
  function Button(){
    //const [count,setCount]=useRecoilState(countAtom)---using this can stop rerendering button also
    const setCount=useSetRecoilState(countAtom)
    return <div>

      <button onClick={()=>setCount(count=>count+1)}>increase count</button>
      <button onClick={()=>setCount(count=>count-1)}>decrease count</button>
    </div>
  }

  function Even(){
  
    const even=useRecoilValue(evenSelector)
    
    return <div>
      {even?'its even':'odd'}
    </div>

  }
export default App
