import { Link } from "react-router-dom"

export function Navbar() {
  return (
    <>
    <div className="p-2 flex justify-center">
      <Link to="/">
        <button className="btn btn-md border-2 border-yellow-800">
          Accueil
        </button>
      </Link>
    </div>
    <div className="flex justify-center gap-2 m-3">
      <Link to="/Depense">
        <button className="btn btn-md border-2 border-yellow-800">
          Dépenses
        </button>
      </Link>
      <Link to="/commande">
        <button className="btn btn-md border-2 border-yellow-800">
          Commandes
        </button>
      </Link>
      
      <Link to="/Achat">
        <button className="btn btn-md border-2 border-yellow-800">
          Achat
        </button>
      </Link>
      <Link to="/Faire">
        <button className="btn btn-md border-2 border-yellow-800">
          À faire
        </button>
      </Link>
    </div>
    </>
  )
}
