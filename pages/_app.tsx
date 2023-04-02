import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import "@vercel/examples-ui/globals.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />;
    </ChakraProvider>
  );
}

export default App;
