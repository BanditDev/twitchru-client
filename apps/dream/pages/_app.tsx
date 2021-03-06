import React from 'react';
import Head from 'next/head';
import App from 'next/app';
import { IntlProvider } from 'react-intl';
import { ApolloProvider, gql, useQuery } from '@apollo/client';
import { useApollo } from '@dream/utils/apollo';
import 'tailwindcss/tailwind.css';
import 'simplebar/dist/simplebar.min.css';
import { Locale, useMeQuery } from '@dream/types';
import { lang } from '../lang';

const getMessages = (locales: string | string[] = ['en-US']) => {
  let locale = 'en-US';

  if (Array.isArray(locales)) {
    if (lang[locales[0]]) {
      locale = locales[0];
    }
  } else if (lang[locales]) {
    locale = locales;
  }

  return [locale];
};

const Inner = ({ Component, pageProps, locale }) => {
  const userQuery = useMeQuery();
  const userLocale = userQuery?.data?.me?.locale;

  locale = (userLocale || locale || Locale.EnUs).replace('_', '-');

  return (
    <IntlProvider locale={locale} messages={lang[locale]}>
      <Head>
        <title>Pepega</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css?family=Orbitron:500|Roboto:300,400,500&subset=cyrillic-ext"
          rel="stylesheet"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-16x16.png"
          sizes="16x16"
        />
      </Head>
      <Component {...pageProps} />
    </IntlProvider>
  );
};

function CustomApp({ Component, pageProps, locale }) {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <Inner Component={Component} pageProps={pageProps} locale={locale} />
    </ApolloProvider>
  );
}

const getInitialProps: typeof App.getInitialProps = async (appContext) => {
  const {
    ctx: { req },
  } = appContext;
  const requestedLocales: string | string[] =
    (req as any)?.locale ||
    (typeof navigator !== 'undefined' && navigator.languages) ||
    'en-US';

  const [locale] = getMessages(requestedLocales);

  const appProps = await App.getInitialProps(appContext);

  return {
    ...(appProps as any),
    locale,
  };
};

CustomApp.getInitialProps = getInitialProps;

export default CustomApp;
