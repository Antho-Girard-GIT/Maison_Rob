import { createContext, useContext, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

const DepensesContext = createContext();

export function DepensesProvider({ children }) {
  const [depenses, setDepenses] = useState([]);

  // Fonction pour charger les dépenses depuis Supabase
  async function fetchDepenses() {
    const { data } = await supabase.from("cout").select();
    setDepenses(data || []);
  }

  return (
    <DepensesContext.Provider value={{ depenses, setDepenses, fetchDepenses }}>
      {children}
    </DepensesContext.Provider>
  );
}

export function useDepenses() {
  return useContext(DepensesContext);
}