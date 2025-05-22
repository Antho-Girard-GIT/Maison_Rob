import { useCommande } from "./commandecontext";

export function CommandeList() {
  const { commandes, deleteCommande } = useCommande();

  return (
    <ul className="list-disc pl-5">
      {commandes.map((commande) => (
        <li key={commande.id} className="py-1 flex items-center justify-between">
          <span className="font-bold">{commande.detail}</span>
          <button
            onClick={() => deleteCommande(commande.id)}
            className="ml-4 bg-red-600 text-white rounded px-2 py-1 text-xs"
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
}