import { DownCircleOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';
import { palette } from '@styles/palette';
import { Dropdown, MenuProps } from 'antd';
import Divider from '@components/divider/Divider';

interface CategoryProps {
  firstCategory: string;
  firstCategoryItems: MenuProps['items'];
  secondCategory: string;
  secondCategoryItems: MenuProps['items'];
  handleFirstCategory: (key: number) => void;
  handleSecondCategory: (key: number) => void;
}

export default function Category({
  firstCategory,
  firstCategoryItems,
  secondCategory,
  secondCategoryItems,
  handleFirstCategory,
  handleSecondCategory,
}: CategoryProps) {
  return (
    <div css={wrapper}>
      <div className="category">
        <Dropdown
          menu={{
            items: firstCategoryItems,
            selectable: true,
            defaultSelectedKeys: ['0'],
            onClick: (e) => handleFirstCategory(+e.key),
          }}
          trigger={['click']}
        >
          <a onClick={(e) => e.preventDefault()}>
            <p css={firstLabel}>
              <span>{firstCategory}</span>
              <DownCircleOutlined />
            </p>
          </a>
        </Dropdown>
        <Divider />
        {firstCategory === '전체' ? (
          <p css={subText}>개발 분야를 선택해주세요.</p>
        ) : (
          <Dropdown
            menu={{
              items: secondCategoryItems,
              selectable: true,
              defaultSelectedKeys: ['0'],
              onClick: (e) => handleSecondCategory(+e.key),
            }}
          >
            <a onClick={(e) => e.preventDefault()}>
              <p css={subText}>
                <span>{secondCategory}</span>
                <DownCircleOutlined />
              </p>
            </a>
          </Dropdown>
        )}
      </div>
    </div>
  );
}

const wrapper = css`
  .category {
    display: flex;
  }
`;

const firstLabel = css`
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  span {
    margin-right: 10px;
  }
`;

const subText = css`
  margin-left: 20px;
  color: ${palette.opBlack8};
  font-size: 20px;
  span {
    margin-right: 10px;
  }
`;
