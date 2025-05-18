import { useAchat } from "../context/achatcontext";

export function AchatList() {
  const { liste, deleteAchat } = useAchat();

  return (
    <ul className="list-disc pl-5">
      {liste.map((item, i) => (
        <li key={i} className="py-1 flex items-center justify-between">
          <span>{item}</span>
          <button
            onClick={() => deleteAchat(i)}
            className="ml-4 bg-red-500 text-white rounded px-2 py-1 text-xs"
          >
            Supprimer
          </button>
        </li>
      ))}
    </ul>
  );
}