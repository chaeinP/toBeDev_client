import type { AppProps } from 'next/app';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { DefaultSeo } from 'next-seo';
import {
  defaultAdditionalLinkTags,
  defaultAdditionalMetaTags,
  defaultSeoConfig,
} from '../src/seo/defaultSeo';
import GlobalStyles from '@styles/GlobalStyles';
import BasicLayout from '@components/layouts/BasicLayout';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  // prettier-ignore
  // structuredData 페이지의 구조를 나타내는 정보로 seo에 적용된다. https://schema.org/WebSite
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://web.toBeDev.com/",
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <DefaultSeo
          {...defaultSeoConfig}
          additionalMetaTags={defaultAdditionalMetaTags}
          additionalLinkTags={defaultAdditionalLinkTags}
        />
        <GlobalStyles />

        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  );
}
