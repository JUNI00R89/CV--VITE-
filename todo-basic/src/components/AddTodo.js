import { useState } from "react";

export default function AddTodo() {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("BOTÓN FUNCIONA — handleSubmit se ejecutó");

    try {
      const response = await fetch("http://localhost:3001/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: title,
          completed: false
        }),
      });

      if (!response.ok) throw new Error("Error al agregar");

      alert("Todo agregado correctamente");

      setTitle("");
    } catch (err) {
      alert("ERROR DE CONEXIÓN");
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Título:</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button type="submit">Guardar</button>
    </form>
  );
}
