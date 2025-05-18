import { Link } from "react-router-dom"

export function Navbar() {
  return (
    <>
    <div className="p-2 flex justify-center">
      <Link to="/">
        <button className="btn btn-md ">
          Accueil
        </button>
      </Link>
    </div>
    <div className="flex justify-center gap-2 m-3">
      <Link to="/Depense">
        <button className="btn btn-md">
          Dépenses
        </button>
      </Link>
      <Link to="/commande">
        <button className="btn btn-md ">
          Commandes
        </button>
      </Link>
      
      <Link to="/Achat">
        <button className="btn btn-md">
          Achat
        </button>
      </Link>
      <Link to="/Faire">
        <button className="btn btn-md">
          À faire
        </button>
      </Link>
    </div>
    </>
  )
}
