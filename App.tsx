import { useState } from 'react'
import { useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card.tsx'

function App() {
  const addID = useRef<any>()
  const [reqList, setReqList] = useState(["Utrecht", "Maastricht", "Nijmegen"])
  const [editClick, setEditClick] = useState(false)
  const [addClick, setAddClick] = useState(false)
  const [addCardClick, setAddCardClick] = useState<boolean>(false)
  const [editIndex, setEditIndex] = useState<number>()

  const [cardList, setCardList] = useState([{chid:123456, did: "B68S"}, 
                                            {chid:789420, did: "N58R"}])
  
  function newCard(childData){
    setCardList([...cardList, childData])
  }

  function handleEditSave(index: number, userInput: string){
    const tempList = reqList.map((request,i)=>{
      if(i===index){
        return userInput
      }else{
        return request
      }
    })
    setEditClick(!editClick)
    setReqList(tempList)
  }

  function handleEdit(index: number){
    setEditClick(true)
    setEditIndex(index)
  }

  function handleAdd(){
    setAddClick(!addClick)
    setReqList([...reqList, addID.current.value])
  }

  return(
    <>
      <>{reqList.map((request,i) => <li>{request}  
      {(editClick && i===editIndex)?(
        <>
          <input type='text' id={i.toString()}></input>
          <button onClick={()=>{handleEditSave(i,((document.getElementById(i.toString()) as HTMLInputElement).value))}}>Save</button>
          <button onClick={()=>{setEditClick(!editClick)}}>Cancel</button>
        </>
      ):(
        <button onClick={()=>{handleEdit(i)}}>Edit</button>
      )}
      </li>)}</>
      {
        addClick?(
          <>
            <input type="text" ref={addID}></input>  
            <button onClick={()=>{handleAdd()}}>Save</button>  
            <button onClick={()=>{setAddClick(!addClick)}}>Cancel</button>      
          </>
        ):(
          <button onClick={()=>{setAddClick(true)}}>+</button>
        )
      }
    <>{cardList.map(card => <Card did={card.did} chid={card.chid.toString()} addNew={false} newCard={0}/>)}</>
    {addCardClick?(
      <> <Card did={""} chid={""} addNew={true} newCard={newCard}/>
      </>
    ):(
      <><button onClick={()=>{setAddCardClick(!addCardClick)}}>Add Request</button></>
    )}
    

    </>

  )

}

export default App