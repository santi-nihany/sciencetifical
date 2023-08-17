"use client";

import { MoralisProvider } from "react-moralis";

export default function Providers({ children }) {
  return (
    <MoralisProvider initializeOnMount={false}>{children}</MoralisProvider>
  );
}
