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
    <div className="border rounded-xl p-5 m-2 shadow-xl/30 bg-[#01257D]">
      <form onSubmit={handleAdd} className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Ajouter un achat"
          value={achat}
          onChange={(e) => setAchat(e.target.value)}
          className="border rounded p-2 flex-1 bg-[#1D1D1D] text-white"
        />
        <button
          type="submit"
          className="bg-[#01257D] text-[#fff] rounded px-4 ring-2 ring-blue-500/50"
        >
          Ajouter
        </button>
      </form>
      <AchatList />
    </div>
  );
}
