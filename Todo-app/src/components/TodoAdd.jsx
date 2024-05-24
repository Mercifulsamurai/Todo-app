import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';


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
        <TextField id="standard-basic" label="TO-DO" variant="standard" value={todoName} onChange={handleNameChange} />
        <Button variant="contained" endIcon={<SendIcon />} onClick={handleAddButtonClicked}>
Add
</Button>
       
     
        </div>
        </>
    );
}
export default TodoAdd;
