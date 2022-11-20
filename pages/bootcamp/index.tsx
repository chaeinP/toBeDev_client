import BasicLayout from '@components/layouts/BasicLayout';
import { Fragment, ReactElement } from 'react';
import Filterting from 'src/contents/bootcamp/Filtering';

export default function BootCamp(): ReactElement {
  return (
    <Fragment>
      {/* JsonLd 추가 (next-seo JsonLd 컴포넌트 활용)  */}
      {/* Seo 추가 (next-seo NextSeo 컴포넌트 활용)  */}
      <BasicLayout>
        <Filterting />
      </BasicLayout>
    </Fragment>
  );
}
