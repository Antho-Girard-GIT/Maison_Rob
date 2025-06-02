import { useAchat } from "../context/achatcontext";

export function AchatList({ isHomePage }) {
  const { achats, deleteAchat } = useAchat();

  return (
    <ul className="list-disc pl-2">
      {achats.map((achat) => (
        <li key={achat.id} className="py-1 flex items-center justify-between">
          <span className={` ${isHomePage ? 'text-white' : ''}`}>{achat.achatdetail}</span>
          {!isHomePage && (
          <button
            onClick={() => deleteAchat(achat.id)}
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