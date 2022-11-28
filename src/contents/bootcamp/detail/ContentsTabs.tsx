import SpaceLayout from '@components/layouts/SpaceLayout';
import { css } from '@emotion/react';
import { Tabs } from 'antd';

export default function ContentsTabs() {
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
    <SpaceLayout>
      <Tabs items={items} size={'large'} css={wrapper}></Tabs>
    </SpaceLayout>
  );
}

const wrapper = css`
  .ant-tabs-nav .ant-tabs-nav-wrap {
    .ant-tabs-nav-list {
      width: 100%;
      justify-content: space-around;
    }
  }
`;
