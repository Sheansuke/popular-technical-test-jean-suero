import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "@layouts/Layout";
import { UIProvider } from "@context/Ui";
import { ScoreProvider } from "@context/Score";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <UIProvider>
          <ScoreProvider>
            <Component {...pageProps} />
          </ScoreProvider>
        </UIProvider>
      </Layout>
    </>
  );
}

export default MyApp;
