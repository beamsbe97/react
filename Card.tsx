import { useState } from "react"

function Card(props:{did:string, chid:string, addNew: boolean, action:any, cardIndex:any, renderAdd:any}){
    const [editClick, setEditClick] = useState<boolean>(false)
    const [addClick, setAddClick] = useState<boolean>(props.addNew)
    const dataFields = ["Channel ID", "DID"]
    const fieldVals = [props.chid, props.did]

    function handleNewSave(inputDID: string, inputChID: string){
        console.log(inputChID)
        console.log(inputDID)
        props.action({chid: inputChID.toString(), did:inputDID})
        props.renderAdd(!addClick)
        setAddClick(!addClick)
    }

    function handleNewCancel(){
        props.renderAdd(!addClick)
        setAddClick(!addClick)
    }

    function handleEditSave(){
        let inputID = props.chid
        let inputDID = props.did
        if((document.getElementById("1") as HTMLInputElement).value.length>0){
            inputDID = (document.getElementById("1") as HTMLInputElement).value
        }

        if((document.getElementById("0") as HTMLInputElement).value.length>0){
            inputID = (document.getElementById("0") as HTMLInputElement).value
        }
    
        props.action(props.cardIndex, inputDID, inputID)
        setEditClick(!editClick)
    }
    return(addClick?(
        <>
        <div className="card">
            <ul><label>New DID:<input type="text" className="input" id="inputDID"></input></label></ul>
            <ul><label>New Channel ID:<input type="text" className="input" id="inputID"></input></label></ul>
            <button className="button" onClick={()=>{handleNewSave(((document.getElementById("inputDID") as HTMLInputElement).value),
                                                  ((document.getElementById("inputID") as HTMLInputElement).value))}}>Save</button>
            <button className="button" onClick={()=>{handleNewCancel()}}>Cancel</button></div>
        </>
    ):(
        <>
        {props.chid.length>0?(<>
        <div className="card">
            {editClick?(
            <>
                {dataFields.map((field,i)=><ul>{field.concat(": ", fieldVals[i])}
                <input className="input" type="text" id={i.toString()}></input>
                </ul>)}
                <button className="button" onClick={()=>{handleEditSave()}}>Save</button>
                <button className="button" onClick={()=>{setEditClick(!editClick)}}>Cancel</button>
                <select>
                    <option >Pending SPC</option>
                    <option >Pending YE </option>
                    <option >Confirmation Step</option>
                    <option >Completed</option>
                </select>
            </>
            ):(
            <>
                {dataFields.map((field,i)=><ul>{field.concat(": ", fieldVals[i])}</ul>)}
                <button className="button" onClick={()=>{setEditClick(!editClick)}}>Edit</button>
            </>)}

        </div>
        </>):(
        <>
        
        
        </>)}
        
    </>))
}




export default Card