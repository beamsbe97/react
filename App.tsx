import { useState } from 'react'
import { useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card.tsx'

function App() {
  const [addCardClick, setAddCardClick] = useState<boolean>(false)
  const [cardList, setCardList] = useState([{chid:123456, did: "B68S"}, 
                                            {chid:789420, did: "N58R"}])
  
  function newCard(childData: any){
    setCardList([...cardList, childData])
  }

  function renderAddBt(toRender: boolean){
    setAddCardClick(toRender)
  }

  function deleteCard(index: number){
    const tempList = cardList.filter((card, i)=> i!==index)
  }

  function cardEditSave(index: number, inputDID: string, inputID: any){
    const tempList = cardList.map((card, i)=> {
      if(i===index){
        return({chid: inputID, did: inputDID})
      }
      else{
        return card
      }
    })

    setCardList(tempList)
  }

  return(
    <>
    <>{cardList.map((card,i) => <Card did={card.did} chid={card.chid.toString()} addNew={false} action={cardEditSave} cardIndex={i} renderAdd={renderAddBt}/>)}</>
    {addCardClick?(
      <> <Card did={""} chid={""} addNew={true} action={newCard} cardIndex="" renderAdd={renderAddBt}/>
      </>
    ):(
      <><button className='button' onClick={()=>{setAddCardClick(!addCardClick)}}>Add Request</button></>
    )}
    

    </>

  )

}

export default App