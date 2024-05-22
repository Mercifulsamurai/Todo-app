import TodoItem from "./TodoItem"
const TodoItems = ({todoItems, handleDeleteItem}) => {

    return (
    <>

    {todoItems && todoItems.map((item) => (
        <TodoItem todoItem={item.name} onDeleteClick={handleDeleteItem}/>
        ))};
          
    
    </>
    )
}
export default TodoItems