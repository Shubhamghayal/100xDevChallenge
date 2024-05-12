import { useEffect, useState, useMemo } from 'react'
import './App.css'

function App() {
  const [exchange1Data, setExchange1Data] = useState({})
  const [exchange2Data, setExchange2Data] = useState({})
  const [bankData, setBankData] = useState({})
  console.log("adsoosnaod")

  useEffect(()=>{
    setExchange1Data({ 
        return:100 
        
    })
    console.log("1")
  },[])
  useEffect(()=>{
    setExchange2Data({ 
        return:100 
    })
    console.log("2")
  },[])
  useEffect(()=>{
    setTimeout(() => {
      setBankData({ 
        income:100 
    })
    console.log("3")
    }, 1000);
   
  },[])

  const cryptoReturns=useMemo(()=>{
    console.log("before")
    return exchange1Data.return+exchange2Data.return
  },[exchange1Data,exchange2Data])

  console.log("after")


  
  const incomeTax=(cryptoReturns+bankData.income) * 0.3
 


  return (
    <>
      hi  there , your tax return are {incomeTax}
    </>
  )
}

export default App
