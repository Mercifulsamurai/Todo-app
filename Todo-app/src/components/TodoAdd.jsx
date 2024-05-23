import { useState } from "react";

function TodoAdd ({handleNewItem} ) {
    const [todoName, setTodoName] = useState();

    const handleNameChange = (e) => {
        setTodoName(e.target.value)

        //  console.log(e.target.value)
    }
    const handleAddButtonClicked= () => {
     
        handleNewItem(todoName);
        setTodoName("")
        // todoName();
    }
    return (
        <>
        <div className="Addlist">
        <input type="text" value={todoName} onChange={handleNameChange} />
        <button onClick={handleAddButtonClicked}>Add</button>
        </div>
        </>
    );
}
export default TodoAdd;
