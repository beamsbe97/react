import { useState } from "react"

export default function Card(props: {did:string, chid:number, addNew: boolean}){
    const [editClick, setEditClick] = useState<boolean>(false)
    
    function handleEdit(){
        setEditClick(!editClick)
    }
    return(props.addNew?(
        <>
            <input type="text" id="inputID">New Channel ID:</input>
            <input type="text">DID</input>
            <input type="text"></input>
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

