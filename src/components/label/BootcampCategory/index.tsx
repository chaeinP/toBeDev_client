import { RightOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';
import { palette } from '@styles/palette';

export interface BootcampCategoryLabelProps {
  firstCategory: string;
  secondCategory: string;
}

export default function BootcampCategoryLabel({
  firstCategory,
  secondCategory,
}: BootcampCategoryLabelProps) {
  return (
    <div css={category}>
      <p>{firstCategory}</p>
      <p>
        <RightOutlined />
      </p>
      <p>{secondCategory}</p>
    </div>
  );
}

const category = css`
  display: flex;
  padding: 6px 5px 2px;
  font-size: 13px;
  color: ${palette.opBlack8};

  p {
    margin-left: 5px;
  }

  p:nth-of-type(2) {
    font-size: 11px;
  }
`;
