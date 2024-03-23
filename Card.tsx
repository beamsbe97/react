import { useState } from "react"

function Card(props:{did:string, chid:string, addNew: boolean}){
    const [editClick, setEditClick] = useState<boolean>(false)
    const [addClick, setAddClick] = useState<boolean>(props.addNew)

    function handleNewSave(inputDID: string, inputChID: string){
        props.did=inputDID
        props.chid=inputChID
        setAddClick(!addClick)
    }

    function handleEdit(){
        setEditClick(!editClick)
    }
    return(addClick?(
        <>
            <input type="text" id="inputID">New Channel ID:</input>
            <input type="text" id="inputDID">DID</input>
            <button onClick={()=>{handleNewSave(((document.getElementById("inputDID") as HTMLInputElement).value),
                                                ((document.getElementById("inputID") as HTMLInputElement).value))}}>Save</button>
        </>
    ):(<>
        <div className="card">
            <h2 id="chart1">Channel ID: {props.chid}           
            {editClick?(
            <>
                <input type="text"></input>
                <button onClick={()=>{}}>Save</button>
                <button onClick={()=>{setEditClick(!editClick)}}>Cancel</button>
            </>

            ):(
            <button className="buttons" onClick={()=>{handleEdit()}}>Edit</button>   
            )}
            </h2>
            <h2 id="did1">DID: {props.did}
            {editClick?(
            <>
                <input type="text"></input>
                <button onClick={()=>{}}>Save</button>
                <button onClick={()=>{setEditClick(!editClick)}}>Cancel</button>
            </>

            ):(
            <button className="buttons" onClick={()=>{handleEdit()}}>Edit</button>   
            )}
            
            
            
            </h2>

        </div>
    </>))
}

Card.defaultProps


export default Card