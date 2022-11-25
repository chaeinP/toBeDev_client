import SpaceLayouts from '@components/layouts/SpaceLayout';
import Head from 'next/head';
import { Fragment } from 'react';
import BasicLayout from '@components/layouts/BasicLayout';
import KeywordBanner from 'src/contents/home/KeywordBanner';
import MainBanner from 'src/contents/home/MainBanner';
import SpaceLayout from '@components/layouts/SpaceLayout';
import ThinBanner from '@components/banner/ThinBanner';
import Space from '@components/space/Space';
import Filterting from 'src/contents/home/Filtering';
import ProductList from 'src/contents/home/ProductList';

export default function Home() {
  // prettier-ignore
  // structuredData 페이지의 구조를 나타내는 정보로 seo에 적용된다. https://schema.org/WebSite
  const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "url": "https://web.toBeDev.com/",
    };

  return (
    <Fragment>
      <Head>
        {/* JsonLd 추가 (next-seo JsonLd 컴포넌트 활용)  */}
        {/* Seo 추가 (next-seo NextSeo 컴포넌트 활용)  */}
        <script
          id="WebsiteStructuredData"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <BasicLayout>
        <ThinBanner />
        <Space height="10px" />
        <Filterting />
        <Space height="30px" />
        <ProductList />
      </BasicLayout>
    </Fragment>
  );
}
