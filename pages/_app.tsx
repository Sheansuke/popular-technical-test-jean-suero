import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "@layouts/Layout";
import { UIProvider } from "@context/Ui";
import { ScoreProvider } from "@context/Score";
import { ConfigProvider } from "@context/TypingConfigs";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <UIProvider>
          <ScoreProvider>
            <ConfigProvider>
              <Component {...pageProps} />
            </ConfigProvider>
          </ScoreProvider>
        </UIProvider>
      </Layout>
    </>
  );
}

export default MyApp;
