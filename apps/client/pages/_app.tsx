import {useEffect} from 'react';
import type { AppProps } from 'next/app';
import { ru } from 'date-fns/locale';
import Head from 'next/head';
import { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'antd/dist/reset.css';
import '../styles/globals.css';
import { Providers } from '../src/core/providers/storeProvider';

registerLocale('ru', ru);

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    const isProduction = process.env.NAME !== 'development';
    if (isProduction) {
      navigator.serviceWorker.register('/service-worker.js');
    }
  }, []);

  return(
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/android-chrome-192x192.png" />
      </Head>
      <Providers>
        <Component {...pageProps} />
      </Providers>
    </>
  );
};

export default App;
