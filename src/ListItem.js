import React from "react";
import Item from "./Item";
import "./ListItem.css";

function ListItem(props) {

    
    let [editingMode, setEditing] = React.useState(false);
    let [editText, setEdit] = React.useState(props.addtxt);

    let setNewText = () => {
        setEditing(true);
    }

    let editedText = () => {
        setEdit(editText);
        setEditing(false);
    }

    let setText = (e) => {
        setEdit(e.target.value);
        if(e.target.value == ""){
            document.getElementById("saveTask-btn").disabled = true;
        }
        else{
            document.getElementById("saveTask-btn").disabled = false;
        }
        
    }
    
    return (
    
            editingMode ? 
            <div id="edit-mode">
                <input className="editTask font-style form-control font-style" onChange={setText} value={editText}></input>
                <button id="saveTask-btn" className="saveTask font-style" onClick={editedText}>Save</button>
            </div>       
                          :  <Item editMode={setNewText} addtxt={editText} id={props.id}/> 
    )
}


export default ListItem;