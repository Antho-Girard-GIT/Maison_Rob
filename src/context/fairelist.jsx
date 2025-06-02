import { useFaire } from "../context/fairecontext";

export function FaireList({ isHomePage }) {
  const { taches, deleteTache } = useFaire();

  return (
    <ul className="list-disc pl-2">
      {taches.map((tache) => (
        <li key={tache.id} className="py-1 flex items-center justify-between">
          <span className={` ${isHomePage ? 'text-white' : ''}`}>{tache.todo}</span>
          {!isHomePage && (
          <button
            onClick={() => deleteTache(tache.id)}
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