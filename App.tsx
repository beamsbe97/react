import { useState } from 'react'
import { useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Request from './Ting'



function App() {
  const refID = useRef()
  const [click, setClick] = useState(false)
  const [reqList, setReqList] = useState(["1", "2", "3"])

  function updateList(){
    setReqList([...reqList, {refID}])
    
  }
  

  if(!click){
    return (
      <>
        {reqList.map(request => <li>{request}</li>)}
        <button onClick={()=>{setClick(!click)}}>+</button>
      </>
    )
  }
  else{
    return (
      <>
        {reqList.map(request => <li>{request}</li>)}
        <label> Channel ID
          <input type="text" ref={refID}/>
        </label>
        <button onClick={updateList}> Save </button>
      
      </>
    )
 ;
}
}


export default App
