import { useState } from "react";
import { useCommande } from "../context/commandecontext";
import { CommandeList } from "../context/commandelist";

export function Commande() {
  const [commande, setCommande] = useState("");
  const { addCommande } = useCommande();

  const handleAdd = (e) => {
    e.preventDefault();
    if (!commande.trim()) return;
    addCommande(commande.trim());
    setCommande("");
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-zinc-100 rounded shadow">
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
          className="bg-blue-500 text-white rounded px-4"
        >
          Ajouter
        </button>
      </form>
      <CommandeList />
    </div>
  );
}