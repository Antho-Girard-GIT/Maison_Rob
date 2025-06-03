import { useState } from "react";
import { useCommande } from "../context/commandecontext";
import { CommandeList } from "../context/commandelist";
import { supabase } from "../supabaseClient"

export function Commande() {
  const [detail, setDetail] = useState("");
  const [mesure, setMesure] = useState("");
  const { fetchCommande } = useCommande();


  const handleAdd = async (e) => {
    e.preventDefault();
    if (!detail || !mesure) return;
    await supabase.from("comms").insert([{ 
      detail: detail,
      mesure: mesure }]);
    setDetail("");
    setMesure("")
    fetchCommande();
  };

  return (
    <div className="border rounded-xl p-5 m-2 shadow-xl/30 bg-[#01257D]">
      <form onSubmit={handleAdd} className="flex flex-col gap-2 mb-4">
        <input
          type="text"
          placeholder="Emplacements"
          value={detail}
          onChange={(e) => setDetail(e.target.value)}
          className="border rounded p-2 flex-1 bg-[#1D1D1D] text-white"
          required
        />
        <input
          type="text"
          placeholder="Ajouter une mesure"
          value={mesure}
          onChange={(e) => setMesure(e.target.value)}
          className="border rounded p-2 flex-1 bg-[#1D1D1D] text-white"
          required
        />
        <button
          type="submit"
          className="bg-[#01257D] text-[#fff] rounded p-2 ring-2 ring-blue-500/50"
        >
          Ajouter
        </button>
      </form>
      <CommandeList />
    </div>
  );
}