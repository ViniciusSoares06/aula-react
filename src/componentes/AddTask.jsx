import { useState } from "react";

function AddTask({ onAddTaskClick }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  console.log({ title, description });
  return (
    <div className="space-y-4 p-4 bg-slate-200 rounded-md shadow flex flex-col">
      <input
        type="text"
        className="w-full p-2 rounded-md"
        placeholder="Título da tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <textarea
        className="w-full p-2 rounded-md"
        placeholder="Descrição da tarefa"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      ></textarea>
      <button
        className="bg-slate-500 text-white p-2 rounded-md"
        onClick={() => {
            if (!title.trim() || !description.trim()) {
                setDescription("")
                setTitle("")
                return alert("Preencha todos os campos")
            }
            onAddTaskClick(title, description)
            setDescription("")
            setTitle("")
        }}
        
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
