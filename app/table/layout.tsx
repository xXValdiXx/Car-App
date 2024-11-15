// components/Layout.tsx
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <nav style={{ backgroundColor: "#9b9b9b", padding: "1rem", color: "gray" }}>
      </nav>
      <main style={{ flex: 1, padding: "2rem" }}>
        {children}
      </main>
      <footer style={{ backgroundColor: "#9b9b9b", padding: "1rem", textAlign: "center" }}>
        <p></p>
      </footer>
    </div>
  );
}