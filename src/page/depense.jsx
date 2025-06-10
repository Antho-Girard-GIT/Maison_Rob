import { useEffect, useState } from "react";
import { useDepenses } from "../context/depensescontext";
import { supabase } from "../supabaseClient"
import checkbox from "daisyui/components/checkbox";


export function Depense() {
  const [montant, setMontant] = useState("");
  const [info, setInfo] = useState("");
  const { depenses, fetchDepenses } = useDepenses();


  const handleAdd = async (e) => {
    e.preventDefault();
    if (!montant) return;
    await supabase.from("cout").insert([{ montant: parseFloat(montant), info }]);
    setMontant("");
    setInfo("");
    fetchDepenses();
  };


  useEffect(() => {
    fetchDepenses();
  })

    const handleDelete = async (id) => {
    await supabase.from("cout").delete().eq("id", id);
    fetchDepenses();
  };

  const handleCheckboxChange = async (id, isChecked) => {
  await supabase
    .from("cout")
    .update({ checkbox: isChecked })
    .eq("id", id);
  fetchDepenses();
};

  return (
    <div className="border rounded-xl p-5 m-2 shadow-xl/30 bg-[#01257D]">
      <form onSubmit={handleAdd} className="flex flex-col gap-4 mb-4">
        <input
          type="number"
          placeholder="Montant"
          value={montant}
          onChange={e => setMontant(e.target.value)}
          className="border rounded p-2 flex-1 bg-[#1D1D1D] text-white"
          required
        />
        <input
          type="text"
          placeholder="Informations"
          value={info}
          onChange={e => setInfo(e.target.value)}
          className="border rounded p-2 flex-1 bg-[#1D1D1D] text-white"
          required
        />
        <button type="submit" className="bg-[#01257D] text-[#fff] rounded p-2 ring-2 ring-blue-500/50">Ajouter</button>
      </form>
      <div className="font-bold text-lg mb-2 text-white">
        Total des dépenses : {depenses.reduce((acc, d) => acc + (d.montant || 0), 0).toFixed(2)}
      </div>
      <div>
        <h3 className="font-semibold mb-2 text-white">Liste des dépenses :</h3>
        <ul className="space-y-1">
          {depenses.map((c) => (
            <li key={c.id || c.name} className="border-b py-1 flex justify-between">
              <input 
              type="checkbox" 
              className="checkbox checkbox-sm border-[#fff] checked:bg-[#fff] checked:text-[#01257D]"
              checked={c.checkbox || false}
              onChange={(e) => handleCheckboxChange(c.id, e.target.checked)}/>
              <span className="italic text-white">{c.info || c.name}</span>
              <span className="font-mono text-white">{(c.montant || 0).toFixed(2)} $</span>
              <button
                onClick={() => handleDelete(c.id)}
                className="ml-2 bg-red-600 text-white px-2 py-1 rounded text-xs"
                title="Supprimer"
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

