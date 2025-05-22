import { useState } from "react";
import { useCommande } from "../context/commandecontext";
import { CommandeList } from "../context/commandelist";
import { supabase } from "../supabaseClient"

export function Commande() {
  const [commande, setCommande] = useState("");
  const { fetchCommande } = useCommande();

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!commande) return;
    await supabase.from("comms").insert([{ detail: commande }]);
    setCommande("");
    fetchCommande();
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-yellow-100 rounded shadow">
      <form onSubmit={handleAdd} className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Ajouter une commande"
          value={commande}
          onChange={(e) => setCommande(e.target.value)}
          className="border rounded p-2 flex-1"
        />
        <button
          type="submit"
          className="bg-yellow-950 text-white rounded px-4"
        >
          Ajouter
        </button>
      </form>
      <CommandeList />
    </div>
  );
}