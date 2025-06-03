import { useDepenses } from "../context/depensescontext";
import { AchatList } from "../context/achatlist";
import { FaireList } from "../context/fairelist";
import { CommandeList } from "../context/commandelist";
import { useEffect } from "react";

export function Home() {
  const { depenses, fetchDepenses } = useDepenses();

  useEffect(() => {
    fetchDepenses();
  }, [fetchDepenses]);
  
  const totaldepenses = depenses.reduce((acc, d) => acc + d.montant, 0);

  return (
    <div className=" flex items-center justify-center m-1">
      <div className="grid grid-cols-2 gap-3">
        <div className="card-body size-45 flex flex-col border rounded-xl inset-shadow-sm/50 bg-[#01257D]">
          <h2 className="text-xl font-bold text-center text-[#fff]">Dépenses</h2>
          <span className="size-30 text-center text-xl m-auto flex items-center justify-center text-[#fff]">
          {totaldepenses.toFixed(2)} $
          </span>
        </div>
        <div className="card-body size-45 border flex flex-col rounded-xl inset-shadow-sm/50 bg-[#01257D] overflow-hidden">
          <h2 className="text-xl font-bold text-center text-[#fff]">Achat</h2>
          <span className="text-sm truncate">
          <AchatList isHomePage={true} />
          </span>
        </div>
        <div className="card-body size-45 border flex flex-col rounded-xl inset-shadow-sm/50 bg-[#01257D] overflow-hidden">
          <h2 className="text-xl font-bold text-center text-[#fff]">Mesures</h2>
          <span className="text-sm truncate">
          <CommandeList isHomePage={true} />
          </span>
        </div>
        <div className="card-body size-45 border flex flex-col rounded-xl inset-shadow-sm/50 bg-[#01257D] overflow-hidden">
          <h2 className="text-xl font-bold text-center text-[#fff]">À faire</h2>
          <span className="text-sm truncate">
          <FaireList isHomePage={true} />
          </span>
        </div>
      </div>
    </div>
  )
}
