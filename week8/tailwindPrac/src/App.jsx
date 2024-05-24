import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RevenueCard } from './components/RevenueCard'

function App() {
  

  return (
    <>
    <div className='grid grid-cols-4'>
    <RevenueCard title={"Amount Pending"} amount={"9,54,855"} orderCount={13}/>
    </div>
      
    </>
  )
}

export default App
