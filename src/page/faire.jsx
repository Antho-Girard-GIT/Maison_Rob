import { useState } from "react";
import { useFaire } from "../context/fairecontext";
import { FaireList } from "../context/fairelist";
import { supabase } from "../supabaseClient"

export function Faire() {
  const [tache, setTache] = useState("");
  const { fetchTaches } = useFaire();

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!tache) return;
    await supabase.from("todotable").insert([{ todo: tache }]);
    setTache("");
    fetchTaches();
  };
 
  return (
    <div className="border rounded-xl p-5 m-2 shadow-xl/30 bg-[#01257D]">
      <form onSubmit={handleAdd} className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Ajouter une tâche"
          value={tache}
          onChange={(e) => setTache(e.target.value)}
          className="border rounded p-2 flex-1 bg-[#1D1D1D] text-white"
        />
        <button
          type="submit"
          className="bg-[#01257D] text-[#fff] rounded px-4 ring-2 ring-blue-500/50"
        >
          Ajouter
        </button>
      </form>
      <FaireList />
    </div>
  );
}