
import { useState } from 'react';
import './App.css'
import TodoAdd from './components/TodoAdd';
import TodoItems from './components/TodoItems';

function App() {

const [todoItems,setTodoItems] = useState([])
const handleNewItem = (itemName) => {
  console.log(`New Item Added: ${itemName}`)
  const newTodoItems = [...todoItems,{name: itemName}]
  setTodoItems(newTodoItems)
}

const handleDeleteItem =(todoItemName) => {
  const newTodoItems = todoItems.filter(
  (item) => item.name !== todoItemName)
  setTodoItems(newTodoItems)

}
  return (
    <>
      <h1 className='heading'>TODO APP</h1>
      <TodoAdd handleNewItem={handleNewItem}  />
      <TodoItems todoItems={todoItems} handleDeleteItem={handleDeleteItem}/>
      </>
  )
}

export default App
