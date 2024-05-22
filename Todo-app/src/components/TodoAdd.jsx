import { useState } from "react";

function TodoAdd ({handleNewItem} ) {
    const [todoname, setTodoName] = useState();

    const handleNameChange = (e) => {
        setTodoName(e.target.value)
        //  console.log(e.target.value)
    }
    const handleAddButtonClicked= () => {
     
        handleNewItem(todoname)
        setTodoName()
    }
    return (
        <>
        <div className="Addlist">
        <input type="text"  onChange={handleNameChange} />
        <button onClick={handleAddButtonClicked}>Add</button>
        </div>
        </>
    );
}
export default TodoAdd;
