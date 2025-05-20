import { createContext, useContext, useState, useEffect } from "react";
import { supabase } from "../supabaseClient"

const AchatContext = createContext();

export function AchatProvider({ children }) {
  const [achats, setAchats] = useState([]);

  async function fetchAchat() {
        const { data } = await supabase.from("achat").select();
        setAchats(data || []);
      }
    
      useEffect(() => {
        fetchAchat();
      }, []);

  const deleteAchat = async (id) => {
    await supabase.from("achat").delete().eq("id", id);
    fetchAchat();
  };

  return (
    <AchatContext.Provider value={{ achats, fetchAchat, deleteAchat }}>
      {children}
    </AchatContext.Provider>
  );
}

export function useAchat() {
  return useContext(AchatContext);
}