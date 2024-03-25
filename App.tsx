import { useState } from 'react'
import { useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card.tsx'

function App() {
  const [addCardClick, setAddCardClick] = useState<boolean>(false)
  const [cardList, setCardList] = useState([{chid:123456, did: "B68S", status:"Pending"}, 
                                            {chid:789420, did: "N58R", status:"Confirmed"}])
  const [status, setStatus] = useState<string>()
  
  function newCard(childData: any){
    setCardList([...cardList, childData])
  }

  function renderAddBt(toRender: boolean){
    setAddCardClick(toRender)
  }

  function deleteCard(index: number){
    const tempList = cardList.filter((card, i)=> i!==index)
  }

  function cardEditSave(index: number, inputDID: string, inputID: any, statusInput: string){

    const tempList = cardList.map((card, i)=> {
      if(i===index){
        return({chid: inputID, did: inputDID, status: statusInput})
      }
      else{
        return card
      }
    })
    setStatus(statusInput)
    setCardList(tempList)
  }

  return(
    <>
    <>{cardList.map((card,i) => <Card did={card.did} chid={card.chid.toString()} addNew={false} action={cardEditSave} cardIndex={i} renderAdd={renderAddBt} status={card.status}/>)}</>
    {addCardClick?(
      <> <Card did={""} chid={""} addNew={true} action={newCard} cardIndex="" renderAdd={renderAddBt} status={""}/>
      </>
    ):(
      <><button className='button' onClick={()=>{setAddCardClick(!addCardClick)}}>Add Request</button></>
    )}
    

    </>

  )

}

export default App