import { useState } from "react"

function Card(props:{did:string, chid:string, addNew: boolean, newCard:any}){
    const [editClick, setEditClick] = useState<boolean>(false)
    const [addClick, setAddClick] = useState<boolean>(props.addNew)

    function handleNewSave(inputDID: string, inputChID: string){
        console.log(inputChID)
        console.log(inputDID)
        props.newCard({chid: inputChID.toString(), did:inputDID})

        setAddClick(!addClick)
    }

    function handleEdit(){
        setEditClick(!editClick)
    }
    return(addClick?(

        <><div className="card">
            <h2>hi mum</h2>
            <ul>
            <label>New DID:<input type="text" id="inputDID"></input></label>
            <label>New Channel ID:<input type="text" id="inputID"></input></label>
            </ul>
            <button onClick={()=>{handleNewSave(((document.getElementById("inputDID") as HTMLInputElement).value),
                                                  ((document.getElementById("inputID") as HTMLInputElement).value))}}>Save</button>
            <button onClick={()=>{setAddClick(!addClick)}}>Cancel</button></div>
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




export default Card