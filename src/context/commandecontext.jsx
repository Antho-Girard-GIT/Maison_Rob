import { createContext, useContext, useState, useEffect } from "react";
import { supabase } from "../supabaseClient"

const CommandeContext = createContext();

export function CommandeProvider({ children }) {
  const [commandes, setCommandes] = useState([]);

  async function fetchCommande() {
      const { data } = await supabase.from("comms").select();
      setCommandes(data || []);
    }
  
    useEffect(() => {
      fetchCommande();
    }, []);

  const deleteCommande = async (id) => {
    await supabase.from("comms").delete().eq("id", id);
    fetchCommande();
  };

  return (
    <CommandeContext.Provider value={{ commandes, fetchCommande, deleteCommande }}>
      {children}
    </CommandeContext.Provider>
  );
}

export function useCommande() {
  return useContext(CommandeContext);
}