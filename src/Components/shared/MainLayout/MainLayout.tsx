import React from "react";
import NavbarPage from "../../NavbarPage/NavbarPage";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <NavbarPage />
      <div>{children}</div>
    </main>
  );
}
