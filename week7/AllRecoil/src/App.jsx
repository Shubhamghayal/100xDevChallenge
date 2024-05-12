import {RecoilRoot,useRecoilState,useRecoilValue, useSetRecoilState} from "recoil"
import './App.css'
import { jobs, messaging, mynetwork, notification, totalsumselector } from "./atoms"

function App() {
return (
  <RecoilRoot><Mainvalue/></RecoilRoot>
)
}

function Mainvalue(){
const mynetworkvalue=useRecoilValue(mynetwork)
const jobsvalue=useRecoilValue(jobs)
const messagingvalue=useRecoilValue(messaging)
const [notificationvalue,setnotificationvalue]=useRecoilState(notification)
const finaltotalvalue=useRecoilValue(totalsumselector)

  return(
    <div>
    <button> Home</button>
    <button> My network({mynetworkvalue>=100?"99+":mynetworkvalue})</button>
    <button> jobs({jobsvalue})</button>
    <button> messaging({messagingvalue})</button>
    <button> Notification({notificationvalue})</button>
    <button onClick={()=>setnotificationvalue(notificationvalue+1)}> Me({finaltotalvalue})</button>
    {/* <ButtonUpdate/> */}
  </div>
  )

  
}
// function ButtonUpdate(){
//   const setMessagingValue=useSetRecoilState(messaging)
//   return(
//     <button onClick={()=>setMessagingValue((c)=>c+1)}>messageincrease</button>
//   )
// }

export default App
