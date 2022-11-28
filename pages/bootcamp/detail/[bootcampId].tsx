import BasicLayout from '@components/layouts/BasicLayout';
import { Fragment } from 'react';
import ContentsBox from 'src/contents/bootcamp/detail/ContentsBox';
import ContentsTabs from 'src/contents/bootcamp/detail/ContentsTabs';
import TitleBanner from 'src/contents/bootcamp/detail/TitleBanner';

export default function BootcampDetail() {
  return (
    <Fragment>
      {/* NextSeo 추가 */}
      {/* ProductJsonLd 추가 */}
      {/* BreadcrumbJsonLd 추가 */}
      <BasicLayout>
        <TitleBanner />
        <ContentsTabs />
        <ContentsBox />
      </BasicLayout>
    </Fragment>
  );
}
