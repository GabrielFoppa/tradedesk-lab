// src/app/(protegido)/carteira/page.tsx
import { ORDENS_MOCK } from "@/lib/mocks";

export default async function CarteiraPage() {
  const ordens = Array.isArray(ORDENS_MOCK) ? ORDENS_MOCK : [];

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Minha Carteira</h1>
      <table>
        <tbody>
          {ordens.map((o: any, i: number) => (
            <tr key={o?.id || `${o?.ticker || 'ordem'}-${i}`}>
              <td>{o?.ticker ?? "N/A"}</td>
              <td>{o?.quantidade ?? 0}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}