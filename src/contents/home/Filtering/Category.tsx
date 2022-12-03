import { DownCircleOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';
import { palette } from '@styles/palette';
import { Dropdown, MenuProps } from 'antd';
import Divider from '@components/divider/Divider';
import { DESKTOP_MEDIA, MOBILE_MEDIA } from '@styles/media';

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
          <p className="firstLabel">
            <span>{firstCategory}</span>
            <DownCircleOutlined />
          </p>
        </a>
      </Dropdown>
      <Divider />
      {firstCategory === '전체' ? (
        <p className="secondLabel">개발 분야를 선택해주세요.</p>
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
            <p className="secondLabel">
              <span>{secondCategory}</span>
              <DownCircleOutlined />
            </p>
          </a>
        </Dropdown>
      )}
    </div>
  );
}

const wrapper = css`
  display: flex;
  cursor: pointer;
  ${DESKTOP_MEDIA} {
    font-size: 20px;
  }

  ${MOBILE_MEDIA} {
    font-size: 16px;
  }

  .firstLabel {
    font-weight: 600;

    ${DESKTOP_MEDIA} {
      span {
        margin-right: 10px;
      }
    }

    ${MOBILE_MEDIA} {
      span {
        margin-right: 5px;
      }
    }
  }

  .secondLabel {
    color: ${palette.opBlack8};
    span {
      margin-right: 10px;
    }
  }
`;
