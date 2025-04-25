function AddTasks(){
  return (
    <div className ="space-y-4 p-10 mt-2 bg-slate-200 rounded-md shadow flex flex-col">
      <input type="text" placeholder="Digite o título da tarefa"
      className = "border border-slate-300 outline-slate-900 px-4 py-2 rounded-md">

      </input>

      <input type="text" placeholder="Digite a descrição da tarefa"
      className = "border border-slate-300 outline-slate-900 px-4 py-2 rounded-md">

      </input>

      <button className = "bg-slate-700 text-white px-4 py-2 rounded-md font-medium">Add New Task</button>
      
    </div>
  );
}

export default AddTasks;