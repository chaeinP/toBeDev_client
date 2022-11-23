import { DownCircleOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';
import { Dropdown, MenuProps } from 'antd';

export default function Category_() {
  const menuList: MenuProps['items'] = [
    {
      key: '1',
      label: '전체',
    },
    {
      key: '2',
      label: '웹개발',
      children: [
        {
          key: '2-1',
          label: '전체',
        },
        {
          key: '2-2',
          label: '프론트엔드',
        },
        {
          key: '2-3',
          label: '백엔드',
        },
      ],
    },
    {
      key: '3',
      label: '데이터사이언스',
      children: [
        {
          key: '3-1',
          label: '전체',
        },
        {
          key: '3-2',
          label: '데이터분석',
        },
        {
          key: '3-3',
          label: '인공지능',
        },
      ],
    },
  ];

  return (
    <div css={wrapper}>
      <Dropdown
        menu={{ items: menuList, selectable: true }}
        trigger={['click']}
      >
        <a onClick={(e) => e.preventDefault()}>
          <p css={label}>
            <span>카테고리</span>
            <DownCircleOutlined />
          </p>
        </a>
      </Dropdown>
    </div>
  );
}

const wrapper = css`
  display: flex;
`;

const label = css`
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  span {
    margin-right: 10px;
  }
`;
