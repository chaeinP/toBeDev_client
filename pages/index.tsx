import Head from 'next/head';
import { Fragment } from 'react';

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
        <script
          id="WebsiteStructuredData"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
    </Fragment>
  );
}
