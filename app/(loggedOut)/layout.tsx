import HeaderHome from "../components/home-landing/HeaderHome";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sciencetifical",
  description: "The Github of Science",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isAuthenticated = false;
  return (
    <div>
      <HeaderHome auth={isAuthenticated} />
      {children}
    </div>
  );
}
