import logo from './logo.svg';
import './App.css';
import React from "react";
import ListItem from "./ListItem";
import { Button } from 'react-bootstrap';

function App() {
  let [element, setElement] = React.useState("");
	let [list, setList] = React.useState([]);
	

	function addToList() {
		if(element !== ""){
			list.push(element);
			setList(list);
			setElement("");
			
		}
		
		

	}
	let setText = (e) => {
		setElement(e.target.value);
		if(e.target.value === ""){
            document.getElementById("btn-1").disabled = true;
        }
        else{
            document.getElementById("btn-1").disabled = false;
        }
		
	}


  return (
	<>
	<h1 id="heading" className="font-style">To-Do-List</h1>
    <div className="App">
	
      <div id="add-task">
			<input id="task" className="font-style form-control" value={element} onChange={setText}></input>
			<button id="btn-1" className="font-style" onClick={addToList}>+</button>
		</div>
		<div id="list-div">
			{
				list.map((item, index)=> <ListItem className="list" key={index} id={index} addtxt={item}/>)

				
			}
		</div>
    </div>
	</>
  );
}

export default App;
