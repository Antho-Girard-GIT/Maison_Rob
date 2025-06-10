import { createContext, useContext, useState } from "react";
import { supabase } from "../supabaseClient"

const DepensesContext = createContext();

export function DepensesProvider({ children }) {
  const [depenses, setDepenses] = useState([]);

  // Fonction pour charger les dépenses depuis Supabase
  async function fetchDepenses() {
    const { data } = await supabase
    .from("cout")
    .select("*")
    .order('id', { ascending: false });
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