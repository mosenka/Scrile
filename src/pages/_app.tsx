import React from "react";

import "@app/styles/globals.scss";

import RootLayout from "@app/RootLayout";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}
