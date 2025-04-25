import { ChevronRightIcon, TrashIcon } from "lucide-react";

function Tasks({tasks, onTaskClick, onDeleteTaskClick}){

  return (
    <ul className = "space-y-4 p-10 bg-slate-200 rounded-md shadow">
      {tasks.map((tasks) => (
        <li key={tasks.id} className = "flex">

          <button onClick={() => onTaskClick(tasks.id)} className = {`bg-slate-400 w-full text-white p-2 rounded-md ${tasks.completed && "line-through"}`}>
            {tasks.title}
          </button>

          <button className = "bg-slate-400 ml-2 text-white p-2 rounded-md text-wite">
            <ChevronRightIcon />
          </button>

          <button onClick = {() => onDeleteTaskClick(tasks.id)} className = "bg-slate-400 ml-2 text-white p-2 rounded-md text-wite">
            <TrashIcon />
          </button>
          
        </li>
      ) )}
    </ul>
  )
 

}

export default Tasks;
