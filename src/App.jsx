import { useState } from "react";
import Tasks from './components/Tasks';
import AddTasks from './components/AddTasks';
import './App.css';




function App(){

  const [tasks, setTasks] = useState([
    { id: 1, title: 'Montar Processo', completed: false },
    { id: 2, title: 'Listar Documentação', completed: false },
    { id: 3, title: 'Adicionar Item', completed: false },
    { id: 4, title: 'Verificar cada Item', completed: false },
    { id: 5, title: 'Validar Item', completed: false },
    { id: 6, title: 'Assinar Item', completed: false },
    { id: 7, title: 'Juntar Item', completed: false },
    { id: 8, title: 'Enviar Item', completed: false },
    { id: 9, title: 'Baixar Recibo de Envio', completed: false },
    { id: 10, title: 'Guardar Recibo de Envio', completed: false }
  ])
  
  function onTaskClick(taskId){
    const newTasks = tasks.map((task) => {
      //PRECISO ATT A TASK
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }

      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId){
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  return (

    <div className = "w-screen h-screen bg-slate-400 flex justify-center p-6">
      <div className = "w-[500px]">

        <h1 className = "text-3xl text-slate-100 font-bold text-center"> Tasks Manager!</h1>
        <Tasks tasks={tasks} 
          onTaskClick={onTaskClick} 
          onDeleteTaskClick={onDeleteTaskClick}/>
        <AddTasks />

      </div>
    </div>
    
  )

}

export default App