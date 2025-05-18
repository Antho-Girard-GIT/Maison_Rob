import { createContext, useContext, useState } from "react";

const CommandeContext = createContext();

export function CommandeProvider({ children }) {
  const [commandes, setCommandes] = useState([]);

  const addCommande = (commande) => setCommandes((prev) => [...prev, commande]);
  const deleteCommande = (index) =>
    setCommandes((prev) => prev.filter((_, i) => i !== index));

  return (
    <CommandeContext.Provider value={{ commandes, addCommande, deleteCommande }}>
      {children}
    </CommandeContext.Provider>
  );
}

export function useCommande() {
  return useContext(CommandeContext);
}