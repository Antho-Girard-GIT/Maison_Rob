import { useCommande } from "./commandecontext";

export function CommandeList() {
  const { commandes, deleteCommande } = useCommande();

  return (
    <ul className="list-disc pl-5">
      {commandes.map((commande, i) => (
        <li key={i} className="py-1 flex items-center justify-between">
          <span>{commande}</span>
          <button
            onClick={() => deleteCommande(i)}
            className="ml-4 bg-red-500 text-white rounded px-2 py-1 text-xs"
          >
            Supprimer
          </button>
        </li>
      ))}
    </ul>
  );
}