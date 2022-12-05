import BasicLayout from '@components/layouts/BasicLayout';
import { throttle } from 'lodash';
import { Fragment, useEffect, useState } from 'react';

import ContentBox from 'src/contents/bootcamp/detail/ContentBox';
import ContentsNavBar from 'src/contents/bootcamp/detail/ContentsNavBar';
import TitleBanner from 'src/contents/bootcamp/detail/TitleBanner';

export default function BootcampDetail() {
  const [scrollOn, setScrollOn] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 350) setScrollOn(true);
      else setScrollOn(false);
    });
  });

  const contentsNavBarProps = {
    scrollOn,
  };

  const contentBoxProps = {
    scrollOn,
  };

  return (
    <Fragment>
      {/* NextSeo 추가 */}
      {/* ProductJsonLd 추가 */}
      {/* BreadcrumbJsonLd 추가 */}
      <BasicLayout>
        <TitleBanner />
        <ContentsNavBar {...contentsNavBarProps} />
        <ContentBox {...contentBoxProps} />
      </BasicLayout>
    </Fragment>
  );
}
