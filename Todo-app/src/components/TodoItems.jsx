import TodoItem from "./TodoItem"
const TodoItems = ({todoItems, handleDeleteItem, removeL}) => {

    return (
    <>

    {todoItems && todoItems.map((item) => (
        <TodoItem todoItem={item.name} onDeleteClick={handleDeleteItem} removeL={removeL} key={item.id}/>
        ))};
          
    
    </>
    )
}
export default TodoItems