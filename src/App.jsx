import "./index.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./page/home";
import { Depense } from "./page/depense";
import { Achat } from "./page/achat";
import { Faire } from "./page/faire";
import { DepensesProvider } from "./context/depensescontext";
import Layout from "./layout";
import { AchatProvider } from "./context/achatcontext";
import { FaireProvider } from "./context/fairecontext";
import { CommandeProvider } from "./context/commandecontext";
import { Commande } from "./page/commande";


function App() {

  return (
    <div className="bg-[#0D1B2B] h-screen">
    <CommandeProvider>
    <FaireProvider>
    <AchatProvider>
    <DepensesProvider>
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/depense" element={<Depense />} />
          <Route path="/achat" element={<Achat />} />
          <Route path="/faire" element={<Faire />} />
          <Route path="/commande" element={<Commande />} />
        </Route>
      </Routes>
    </Router>
    </DepensesProvider>
    </AchatProvider>
    </FaireProvider>
    </CommandeProvider>
    </div>
  )
}

export default App
