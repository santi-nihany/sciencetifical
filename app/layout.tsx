import "./globals.css";
import type { Metadata } from "next";
import Providers from "./components/providers";

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
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
