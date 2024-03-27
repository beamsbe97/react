import { useState } from "react"

function Card(props:{did:string, chid:string, addNew: boolean, action:any, cardIndex:any, renderAdd:any, status:string}){
    const [editClick, setEditClick] = useState<boolean>(false)
    const [addClick, setAddClick] = useState<boolean>(props.addNew)
    const dataFields = ["Channel ID", "DID", "Status"]
    const fieldVals = [props.chid, props.did, props.status]
    const [deleteClick, setDeleteClick] = useState<boolean>(false)

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
        console.log((document.getElementById("reqStatus") as HTMLInputElement).value)
        let inputID = props.chid
        let inputDID = props.did
        if((document.getElementById("1") as HTMLInputElement).value.length>0){
            inputDID = (document.getElementById("1") as HTMLInputElement).value
        }

        if((document.getElementById("0") as HTMLInputElement).value.length>0){
            inputID = (document.getElementById("0") as HTMLInputElement).value
        }
    
        deleteClick?(
            props.action(props.cardIndex, inputDID, inputID, (document.getElementById("reqStatus") as HTMLInputElement).value, true) //delete card
        ):(
            props.action(props.cardIndex, inputDID, inputID, (document.getElementById("reqStatus") as HTMLInputElement).value, false) //only make changes
        )
        
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
                {field==="Status"?(<>
                <select className="input" defaultValue="Pending" id="reqStatus">
                    <option >Pending</option>
                    <option >Confirmed</option>
                    <option >Completed</option>
                </select> 
                </>):(<>
                    <input className="input" type="text" id={i.toString()}></input>
                </>)}
                
                </ul>)}
                <ul><button className="button" onClick={()=>{setDeleteClick(!deleteClick)}}>Delete request</button></ul>
                <ul><label><input type="checkbox" className="deletebox"/> Delete</label></ul>
                <button className="button" onClick={()=>{handleEditSave()}}>Save</button>
                <button className="button" onClick={()=>{setEditClick(!editClick)}}>Cancel</button>
                
            </>
            ):(
            <>
                {dataFields.map((field,i)=><ul>{field.concat(": ", fieldVals[i])}</ul>)}
                <button className="button" onClick={()=>{setEditClick(!editClick)}}>Edit</button>
                
            </>)}

        </div>
        </>):(<></>)}
        
    </>))
}




export default Card