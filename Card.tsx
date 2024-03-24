import { useState } from "react"

function Card(props:{did:string, chid:string, addNew: boolean, action:any, cardIndex:any}){
    const [editClick, setEditClick] = useState<boolean>(false)
    const [addClick, setAddClick] = useState<boolean>(props.addNew)
    const dataFields = ["Channel ID", "DID"]
    const fieldVals = [props.chid, props.did]

    function handleNewSave(inputDID: string, inputChID: string){
        console.log(inputChID)
        console.log(inputDID)
        props.action({chid: inputChID.toString(), did:inputDID})

        setAddClick(!addClick)
    }

    function handleEditSave(){
        let inputDID = Math.max((document.getElementById("1") as HTMLInputElement).value.length, props.did.length)
        let inputID = Math.max((document.getElementById("0") as HTMLInputElement).value.length, props.did.length)
        props.action(props.cardIndex, inputDID, inputID)
        setEditClick(!editClick)
    }
    return(addClick?(
        <>
        <div className="card">
            <ul>
            <label>New DID:<input type="text" id="inputDID"></input></label>
            <label>New Channel ID:<input type="text" id="inputID"></input></label>
            </ul>
            <button onClick={()=>{handleNewSave(((document.getElementById("inputDID") as HTMLInputElement).value),
                                                  ((document.getElementById("inputID") as HTMLInputElement).value))}}>Save</button>
            <button onClick={()=>{setAddClick(!addClick)}}>Cancel</button></div>
        </>
    ):(
        <>
        <div className="card">
            
            {editClick?(
            <>
                {dataFields.map((field,i)=><ul>{field.concat(": ", fieldVals[i])}
                <input type="text" id={i.toString()}></input>
                </ul>)}
                <button onClick={()=>{setEditClick(!editClick)}}>Cancel</button>
                <button onClick={()=>{handleEditSave()}}>Save</button>
            </>
            ):(
            <>
                {dataFields.map((field,i)=><ul>{field.concat(": ", fieldVals[i])}</ul>)}
                <button onClick={()=>{setEditClick(!editClick)}}>Edit</button>
            </>)}

        </div>
    </>))
}




export default Card