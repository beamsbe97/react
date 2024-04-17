import { useEffect, useState } from 'react'
import { useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card.tsx'

function App() {
  const [addCardClick, setAddCardClick] = useState<boolean>(false)
  const [cardList, setCardList] = useState([{chid:123456, did: "B68S", status:"Pending"}, 
                                            {chid:789420, did: "N58R", status:"Confirmed"}])

  let reqData:any

  useEffect(()=>{

    const fetchData = async()=>{
      const res = await fetch('http://127.0.0.1:8000/',{method:'GET'})
      const resJson = await res.json()
      console.log(resJson)
      return resJson
    }

    try{
      fetchData()
      
    }

    catch(e){
      console.log(e)
    }
    console.log(reqData)

  })

  function newCard(childData: any){
    setCardList([...cardList, childData])
  }

  function renderAddBt(toRender: boolean){
    setAddCardClick(toRender)
  }


  function cardEditSave(index: number, inputDID: string, inputID: any, statusInput: string, deleteClick:boolean){

    let tempList = cardList.map((card, i)=> {
      if(i===index){
        return({chid: inputID, did: inputDID, status: statusInput})
      }
      else{
        return card
      }
    })

    if (deleteClick){
      tempList = cardList.filter((_, i)=> i!==index)
    }

    setCardList(tempList)
  }

  return(
    <>
    <>{cardList.map((card,i) => <Card did={card.did} chid={card.chid.toString()} addNew={false} action={cardEditSave} cardIndex={i} renderAdd={renderAddBt} status={card.status}/>)}</>
    {addCardClick?(
      <> <Card did={""} chid={""} addNew={true} action={newCard} cardIndex="" renderAdd={renderAddBt} status={""}/>
      
      </>
    ):(
      <><button className='button' onClick={()=>{setAddCardClick(!addCardClick)}}>Add Request</button>

      </>
      
    )}
    

    </>

  )

}

export default App