import { createContext, useContext, useState, useEffect } from "react";
import { supabase } from "../supabaseClient"

const FaireContext = createContext();

export function FaireProvider({ children }) {
  const [taches, setTaches] = useState([]);

  async function fetchTaches() {
    const { data } = await supabase.from("todotable").select().order('id',{ ascending: false});
    setTaches(data || []);
  }

  useEffect(() => {
    fetchTaches();
  }, []);

  const deleteTache = async (id) => {
    await supabase.from("todotable").delete().eq("id", id);
    fetchTaches();
  };

  return (
    <FaireContext.Provider value={{ taches, deleteTache, fetchTaches }}>
      {children}
    </FaireContext.Provider>
  );
}

export function useFaire() {
  return useContext(FaireContext);
}