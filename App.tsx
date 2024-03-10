import { useState } from 'react'
import { useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  const refID = useRef<any>()
  const editID = useRef<any>()
  const [editClick, setEditClick] = useState(false)
  const [click, setClick] = useState(false)
  const [reqList, setReqList] = useState(["1", "2", "3"])


  function editList(){
    console.log(editID.current.value)
    let edited_req = reqList.map(()=>{return editID.current.value})
    setReqList(edited_req)
  }


  function updateList(){
    setReqList([...reqList, refID.current.value])
  }

  function ItemList(){
    if(editClick==false){
      return(<>{reqList.map((request,i) => <li key={i}>{request} 
      <button onClick={()=>{setEditClick(!editClick)}}>Edit</button> </li>)}
      </>)
    }
    else{
      return(<>{reqList.map(request => <li>{request} 
        <input type="text" ref={editID}/>
        <button onClick={()=>{}}>Save</button> 
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