import type { AppProps } from 'next/app';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { DefaultSeo } from 'next-seo';
import {
  defaultAdditionalLinkTags,
  defaultAdditionalMetaTags,
  defaultSeoConfig,
} from '../src/seo/defaultSeo';
import GlobalStyles from '@styles/GlobalStyles';
import BasicLayout from '@components/layouts/BasicLayouts';

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <DefaultSeo
          {...defaultSeoConfig}
          additionalMetaTags={defaultAdditionalMetaTags}
          additionalLinkTags={defaultAdditionalLinkTags}
        />
        <GlobalStyles />
        <BasicLayout>
          <Component {...pageProps} />
        </BasicLayout>
      </Hydrate>
    </QueryClientProvider>
  );
}
