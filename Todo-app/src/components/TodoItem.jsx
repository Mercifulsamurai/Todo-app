

function TodoItem({todoItem, onDeleteClick, removeL}) {


    return(
        <div className="list">
        <h3 class="items">{todoItem}</h3>
        <img id="logo" src={removeL} onClick={() => onDeleteClick(todoItem)} />
       
      </div>
    
    )
}

export default TodoItem;