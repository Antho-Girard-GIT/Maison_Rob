import { useFaire } from "../context/fairecontext";

export function FaireList() {
  const { taches, deleteTache } = useFaire();

  return (
    <ul className="list-disc pl-5">
      {taches.map((tache, i) => (
        <li key={i} className="py-1 flex items-center justify-between">
          <span>{tache}</span>
          <button
            onClick={() => deleteTache(i)}
            className="ml-4 bg-red-500 text-white rounded px-2 py-1 text-xs"
          >
            Supprimer
          </button>
        </li>
      ))}
    </ul>
  );
}