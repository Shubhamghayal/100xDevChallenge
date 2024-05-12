import { Suspense, lazy } from 'react'
import{BrowserRouter,Route, Routes, useNavigate} from 'react-router-dom'
import './App.css'
const  Dashboard = lazy(()=>import('./components/Dashboard')) 
const Landing = lazy(()=> import('./components/Landing')) 


function App() {

 
  return (
<div>
<BrowserRouter>
      <Appbar/>
      <Routes>
        <Route path="/dashboard" element={<Suspense><Dashboard></Dashboard></Suspense>}></Route>
        <Route path="/" element={<Suspense><Landing></Landing></Suspense>}></Route>

      </Routes>
</BrowserRouter>

</div>
  )}

  function Appbar(){

    const navigate=useNavigate();


    return (
      <div>
  
  <button onClick={()=>{navigate("/")}
  }> Landing page</button>
  <button onClick={()=>{navigate("/dashboard")}
  }> Dashboard page</button>
  </div>

  )}

export default App
