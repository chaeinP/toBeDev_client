import { css } from '@emotion/react';
import { MAX_DESKTOP_WIDTH } from '@styles/media';
import { palette } from '@styles/palette';
import { Tabs } from 'antd';

export interface ContentsNavBarProps {
  scrollOn: boolean;
}

export default function ContentsNavBar({ scrollOn }: ContentsNavBarProps) {
  const items = [
    {
      label: '기본 정보',
      key: '1',
    },
    {
      label: '상세 정보',
      key: '2',
    },
    {
      label: '커리큘럼',
      key: '3',
    },
    {
      label: '후기',
      key: '4',
    },
  ];

  return (
    <div css={wrapper}>
      <Tabs items={items} size={'large'} css={tabs}></Tabs>
      {scrollOn && <div css={bottomLine}></div>}
    </div>
  );
}

const wrapper = css`
  top: 0;
  position: sticky;
  margin: 0 auto;
`;

const tabs = css`
  max-width: ${MAX_DESKTOP_WIDTH};
  margin: 0 auto;

  .ant-tabs-nav .ant-tabs-nav-wrap {
    background-color: white;
    border-bottom: 0.5px solid ${palette.opBlack2};
    .ant-tabs-nav-list {
      width: 100%;
      justify-content: space-around;
    }
  }
`;

const bottomLine = css`
  position: relative;
  top: -18.3px;
  height: 1px;
  border-bottom: 0.5px solid ${palette.opBlack2};
`;
