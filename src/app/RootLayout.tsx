import React from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

import { ReduxProvider, FontProvider } from "@app/providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReduxProvider>
      <FontProvider>{children}</FontProvider>
    </ReduxProvider>
  );
}
