import { useState } from 'react'
import { useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  const refID = useRef<any>()
  let editID = useRef<any>()
  const [tempInput, setTempInput] = useState<any>()
  const [editClick, setEditClick] = useState(false)
  const [click, setClick] = useState(false)
  const [reqList, setReqList] = useState(["Utrecht", "Maastricht", "Nijmegen"])


  function editList(index: number){
    console.log(tempInput)
    let edited_req = reqList.map((c,i)=>{
      if (i===index){
        return tempInput
      }
      else{
        return c
      }
     })
    setReqList(edited_req)
  }


  function updateList(){
    setReqList([...reqList, refID.current.value])
  }

  function Item(){
    //Need to decouple item states from item list
  }

  function ItemList(){
    if(editClick==false){
      return(<>{reqList.map((request,i) => <li key={i}>{request} 
      <button onClick={()=>{setEditClick(!editClick)}}>Edit</button> </li>)}
      </>)
    }
    else{
      //Edit item menu
      return(<>{reqList.map((request,i) => <li key={i}>{request} 
        <input type="text" value={tempInput} onChange={e=>{setTempInput(e.target.value)}} autoFocus/>
        <button onClick={()=>{editList(i)}}>Save</button> 
        <button onClick={()=>{setEditClick(!editClick)}}>Cancel</button> 
        </li>)}
        </>)
    }

  }

  if(!click){
    return (
      <>
        <ItemList/>
        <button onClick={()=>{setClick(!click)}}>+</button>
      </>
    )
  }
  else{
    return (
      <>
        <ItemList/>
        <label> Channel ID 
          <input type="text" ref={refID}/>
        </label>
        <button onClick={()=>{updateList()}}> Save </button>
        <button onClick={()=>{setClick(!click)}}> Cancel </button>
      </>
    )
 ; 
}
}


export default App
