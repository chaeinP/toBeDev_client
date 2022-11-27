import BasicLayout from '@components/layouts/BasicLayout';
import { Fragment } from 'react';
import TitleBanner from 'src/contents/bootcamp/detail/TitleBanner';

export default function BootcampDetail() {
  return (
    <Fragment>
      {/* NextSeo 추가 */}
      {/* ProductJsonLd 추가 */}
      {/* BreadcrumbJsonLd 추가 */}
      <BasicLayout>
        <TitleBanner></TitleBanner>
      </BasicLayout>
    </Fragment>
  );
}
