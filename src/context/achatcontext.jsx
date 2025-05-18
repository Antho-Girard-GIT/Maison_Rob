import { createContext, useContext, useState } from "react";

const AchatContext = createContext();

export function AchatProvider({ children }) {
  const [liste, setListe] = useState([]);

  const addAchat = (achat) => setListe((prev) => [...prev, achat]);
  const deleteAchat = (index) =>
    setListe((prev) => prev.filter((_, i) => i !== index));

  return (
    <AchatContext.Provider value={{ liste, addAchat, deleteAchat }}>
      {children}
    </AchatContext.Provider>
  );
}

export function useAchat() {
  return useContext(AchatContext);
}