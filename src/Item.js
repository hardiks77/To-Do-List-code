import React from "react";
import "./Item.css";

function Item(props) {

    let deleteItem = () => {
        document.getElementById(props.id).remove();
    }


    return (

        <div className="item-div font-style" id={props.id}>
            <p id="item-data" >{props.addtxt}</p>
            <div>
                <button className="edit btn-style" id={["btn", props.id].join("")} onClick={props.editMode}>Edit</button>
                <button className="delete btn-style" id={["btn-delete", props.id].join("")} onClick={deleteItem}>Delete</button>
            </div>
        </div>
    )
}

export default Item;