import react, { useState } from "react";
import ToDoList from "./ToDOList";
import "./ToDo.css";

const ToDo = () => {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);
  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };
  return (
    <div>
      <div className="maine_div">
        <div className="middle_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input type="text" placeholder="Add a Items" onChange={itemEvent} />
          <button onClick={listOfItems}> + </button>
          <ol>
             {/* <li>{inputList}</li>  */}
            {Items.map((inputValue) => {
              return <ToDoList text = {inputValue}/>
            })}
          </ol>
        </div>
      </div>
    </div>
  );
};
export default ToDo;