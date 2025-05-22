import { useState } from "react";
import { useAchat } from "../context/achatcontext";
import { AchatList } from "../context/achatlist";
import { supabase } from "../supabaseClient"

export function Achat() {
  const [achat, setAchat] = useState("");
  const { fetchAchat } = useAchat();

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!achat) return;
    await supabase.from("achat").insert([{ achatdetail: achat }]);
    setAchat("");
    fetchAchat();
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-yellow-100 rounded shadow">
      <form onSubmit={handleAdd} className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Ajouter un achat"
          value={achat}
          onChange={(e) => setAchat(e.target.value)}
          className="border rounded p-2 flex-1"
        />
        <button
          type="submit"
          className="bg-yellow-950 text-white rounded px-4"
        >
          Ajouter
        </button>
      </form>
      <AchatList />
    </div>
  );
}
