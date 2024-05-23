import TodoItem from "./TodoItem"
const TodoItems = ({todoItems, handleDeleteItem}) => {

    return (
    <>

    {todoItems && todoItems.map((item) => (
        <TodoItem todoItem={item.name} onDeleteClick={handleDeleteItem} key={item.id}/>
        ))};
          
    
    </>
    )
}
export default TodoItems