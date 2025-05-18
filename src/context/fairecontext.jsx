import { createContext, useContext, useState } from "react";

const FaireContext = createContext();

export function FaireProvider({ children }) {
  const [taches, setTaches] = useState([]);

  const addTache = (tache) => setTaches((prev) => [...prev, tache]);
  const deleteTache = (index) =>
    setTaches((prev) => prev.filter((_, i) => i !== index));

  return (
    <FaireContext.Provider value={{ taches, addTache, deleteTache }}>
      {children}
    </FaireContext.Provider>
  );
}

export function useFaire() {
  return useContext(FaireContext);
}