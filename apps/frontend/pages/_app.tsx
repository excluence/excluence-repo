import type { AppProps } from "next/app";
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import { Provider } from 'react-redux'
import {store} from '../redux/store'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Layout } from "../components/shared/layout";
import { activeChain } from "../constant";
import { Box, ThemeProvider } from "@mui/material";
import { theme } from "../themes";
import Sidebar from "../components/shared/Sidebar";
// import ErrorBoundary from "../components/shared/ErrorBoundary";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
    <Provider store={store}>
      {/* <ErrorBoundary> */}
        <ThirdwebProvider activeChain={activeChain}>
        <SessionProvider session={pageProps.session}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SessionProvider> 
      </ThirdwebProvider>
    {/* </ErrorBoundary> */}
    </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
