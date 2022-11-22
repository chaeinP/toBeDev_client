import BasicLayout from '@components/layouts/BasicLayout';
import SpaceLayout from '@components/layouts/SpaceLayout';
import { css } from '@emotion/react';
import { palette } from '@styles/palette';
import { Divider } from 'antd';
import { Fragment, ReactElement } from 'react';
import Filterting from 'src/contents/bootcamp/Filtering';

export default function BootCamp(): ReactElement {
  return (
    <Fragment>
      {/* JsonLd 추가 (next-seo JsonLd 컴포넌트 활용)  */}
      {/* Seo 추가 (next-seo NextSeo 컴포넌트 활용)  */}
      <BasicLayout>
        <Filterting />
        <SpaceLayout>
          <div css={divider} />
        </SpaceLayout>
      </BasicLayout>
    </Fragment>
  );
}

const divider = css`
  height: 1px;
  background-color: ${palette.opBlack2};
`;
