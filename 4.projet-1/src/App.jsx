
// import './App.css'

import { useState } from "react"
import { nanoid } from "nanoid";
import ListItem from './components/ListItem'

function App() {


  const [todoList, setTodoList] = useState([ 
    {id: nanoid(8), content: 'Default' },
  ]);
  const [todo, setTodo ] = useState("");
  const [showValidation, setShowValidation ] = useState(false)

  console.log(todoList);
  
  function deleteTodo(id) {
    setTodoList(todoList.filter(task =>  id != task.id));
  }
  function handleSubmit(e) {
    e.preventDefault();
    if(todo === "") {
      setShowValidation(true)
    }
    else {
      setTodoList([...todoList, {id: nanoid(8), content: todo}])
      setTodo("")
      setShowValidation(false)
    }
  }

  return (
    <div className="h-screen">
      <div className="max-w-4xl mx-auto pt-20 px-6">
        <h1 className='text-3xl text-slate-100 mb-4'>La To-do liste</h1>
        <form className='mb-10' onSubmit={handleSubmit}>
          <label htmlFor="todo-item" className='text-slate-50'>Ajouter une tâche</label>
          <input id='todo-item' value={todo} type="text" className='mt-1 block w-full rounded'
            onChange={e => setTodo(e.target.value)}
          />
          {showValidation && 
            <p className="text-red-400 mt-1">Définissez la tâche avant de l'ajouter</p>
          }
          <button className='mt-4 py-2 px-2 bg-slate-50 rounded min-w-[115px]'>Ajouter</button>
          <ul>
            {todoList.length === 0 && <li className="text-slate-50 text-md mt-2">Pas de tâches en cours</li> }
            {todoList.length > 0 &&  todoList.map( 
                item => <ListItem key={item.id} itemData={item} deleteTodo={deleteTodo}/>
            )}
          </ul>
        </form>
      </div>
    </div>
  )
}

export default App
