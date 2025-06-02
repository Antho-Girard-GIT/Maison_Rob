import { useCommande } from "./commandecontext";

export function CommandeList({ isHomePage }) {
  const { commandes, deleteCommande } = useCommande();

  return (
    <ul className="list-disc pl-2">
      {commandes.map((commande) => (
        <li key={commande.id} className="py-1 flex items-center justify-between border-b">
          <div className="flex flex-col">
            <span className={`font-semibold ${isHomePage ? 'text-white' : ''}`}>
              {commande.detail}
            </span>
            <span className={`text-sm ${isHomePage ? 'text-white' : ''}`}>
              {commande.mesure}
            </span>
          </div>
          {!isHomePage && (
          <button
            onClick={() => deleteCommande(commande.id)}
            className="ml-4 bg-red-600 text-white rounded px-2 py-1 text-xs"
          >
            X
          </button>
          )}
        </li>
      ))}
    </ul>
  );
}