import { useCommande } from "./commandecontext";

export function CommandeList() {
  const { commandes, deleteCommande } = useCommande();

  return (
    <ul className="list-disc pl-5">
      {commandes.map((commande) => (
        <li key={commande.id} className="py-1 flex items-center justify-between">
          <span>{commande.detail}</span>
          <button
            onClick={() => deleteCommande(commande.id)}
            className="ml-4 bg-red-500 text-white rounded px-2 py-1 text-xs"
          >
            Supprimer
          </button>
        </li>
      ))}
    </ul>
  );
}