import { useEffect, useState } from "react";
import { useDepenses } from "../context/depensescontext";
import { supabase } from "../supabaseClient"


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
    getCout("");
    fetchDepenses();
  };

  const [cout, setCout] = useState([]);
  useEffect(() => {
    getCout();
    fetchDepenses();
  }, [fetchDepenses]);
  async function getCout() {
    const { data } = await supabase.from("cout").select();
    setCout(data);
  };

    const handleDelete = async (id) => {
    await supabase.from("cout").delete().eq("id", id);
    fetchDepenses();
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-yellow-100 rounded shadow">
      <form onSubmit={handleAdd} className="flex flex-col gap-4 mb-4">
        <input
          type="number"
          placeholder="Montant"
          value={montant}
          onChange={e => setMontant(e.target.value)}
          className="border rounded p-2"
          required
        />
        <input
          type="text"
          placeholder="Informations"
          value={info}
          onChange={e => setInfo(e.target.value)}
          className="border rounded p-2"
          required
        />
        <button type="submit" className="bg-yellow-950 text-white rounded p-2">Ajouter</button>
      </form>
      <div className="font-bold text-lg mb-2">
        Total des dépenses : {depenses.reduce((acc, d) => acc + (d.montant || 0), 0).toFixed(2)}
      </div>
      <div>
        <h3 className="font-semibold mb-2">Liste des dépenses :</h3>
        <ul className="space-y-1">
          {depenses.map((c) => (
            <li key={c.id || c.name} className="border-b py-1 flex justify-between">
              <span className="italic text-yellow-800">{c.info || c.name}</span>
              <span className="font-mono">{(c.montant || 0).toFixed(2)} $</span>
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

