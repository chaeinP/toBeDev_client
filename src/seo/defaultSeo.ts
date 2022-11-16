const defaultSeoConfig = {
  title: undefined,
  titleTemplate: '%s | toBeDev',
  defaultTitle: '개발자가 되기 위해 필요한 모든 정보, toBeDev',
  description: '개발자 교육에 대한 모든 정보, toBeDev 에서 한번에 확인하세요!',
  canonical: 'https://web.toBeDev.com/',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://web.toBeDev.com/',
    site_name: 'toBeDev',
    title: '개발자가 되기 위해 필요한 모든 정보, toBeDev',
    description: '개발자 교육에 대한 모든 정보, toBeDev 에서 한번에 확인하세요!',
    images: [
      {
        url: 'https://web.toBeDev.com/',
        alt: 'toBeDeb',
        width: 800,
        height: 600,
      },
    ],
  },
};

const defaultAdditionalMetaTags = [
  { name: 'application-name', content: 'toBeDev' },
  { property: 'dc:creator', content: 'toBeDev' },
  {
    property: 'x-ua-compatible',
    content: 'IE=edge',
  },
];

const defaultAdditionalLinkTags = [
  // {
  //   rel: 'icon',
  //   href: '/favicon.ico',
  // },
  // { rel: 'shortcut icon', href: '/favicon.ico' },
  // {
  //   rel: 'apple-touch-icon',
  //   href: '/favorit_icon_ios.png',
  //   sizes: '76x76',
  // },
  // {
  //   rel: 'manifest',
  //   href: '/manifest.json',
  // },
  {
    rel: 'preload',
    href: 'https://common.joongna.com/font/spoqa-neo/SpoqaHanSansNeo_all/SpoqaHanSansNeo_TTF_subset/SpoqaHanSansNeo-Bold.woff2',
    as: 'font',
    type: 'font/woff2',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'preload',
    href: 'https://common.joongna.com/font/spoqa-neo/SpoqaHanSansNeo_all/SpoqaHanSansNeo_TTF_subset/SpoqaHanSansNeo-Bold.woff2',
    as: 'font',
    type: 'font/woff2',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'preload',
    href: 'https://common.joongna.com/font/spoqa-neo/SpoqaHanSansNeo_all/SpoqaHanSansNeo_TTF_subset/SpoqaHanSansNeo-Medium.woff2',
    as: 'font',
    type: 'font/woff2',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'preload',
    href: 'https://common.joongna.com/font/spoqa-neo/SpoqaHanSansNeo_all/SpoqaHanSansNeo_TTF_subset/SpoqaHanSansNeo-Regular.woff2',
    as: 'font',
    type: 'font/woff2',
    crossOrigin: 'anonymous',
  },
];

export { defaultSeoConfig, defaultAdditionalMetaTags, defaultAdditionalLinkTags };
