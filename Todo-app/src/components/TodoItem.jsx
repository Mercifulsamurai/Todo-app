

function TodoItem({todoItem, onDeleteClick}) {


    return(
        <div className="list">
        <div>{todoItem}</div>
        <button onClick={() => onDeleteClick(todoItem)}>Delete</button>
      </div>
    )
}

export default TodoItem;