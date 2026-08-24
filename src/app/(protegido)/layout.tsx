import Header from "@/components/Header"; // Bug B5: Header reimportado — aparece duplo em /carteira

export default function ProtegidoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header /> {/* Bug B5: causa Header duplo — o layout raiz já inclui */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "2rem" }}>
        {children}
      </div>
    </div>
  );
}
