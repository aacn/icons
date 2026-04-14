import '@/styles/globals.css';
import React, { ReactElement, ReactNode } from 'react';

import { NextPage } from 'next';

import { TemplateParserProvider } from '@native-systems/ui';
import Head from 'next/head';
import { useRouter } from 'next/router';

import type { AppProps } from 'next/app';


export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement, pageProps: any) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Fix for stale data on dynamic page swap via next Link: https://github.com/vercel/next.js/discussions/22512
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Scanly</title>
      </Head>
      <TemplateParserProvider navigationView={{}}>
        <Component {...pageProps} key={router.asPath} />
      </TemplateParserProvider>
    </>
  );
}

export default MyApp;
