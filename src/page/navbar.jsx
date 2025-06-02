import { Link } from "react-router-dom"

export function Navbar() {
  return (
    <>
    <div className="pt-5 flex justify-center">
      <Link to="/">
        <button className="btn btn-lg border bg-[#001952] text-[#fff] text-xl">
          Accueil
        </button>
      </Link>
    </div>
    <div className="pt-3 pb-5 flex justify-center gap-1">
      <Link to="/Depense">
        <button className="btn btn-md border bg-[#001952] text-[#fff]">
          Dépenses
        </button>
      </Link>
      <Link to="/commande">
        <button className="btn btn-md border bg-[#001952] text-[#fff]">
          Mesures
        </button>
      </Link>
      
      <Link to="/Achat">
        <button className="btn btn-md border bg-[#001952] text-[#fff]">
          Achat
        </button>
      </Link>
      <Link to="/Faire">
        <button className="btn btn-md border bg-[#001952] text-[#fff]">
          À faire
        </button>
      </Link>
    </div>
    </>
  )
}
