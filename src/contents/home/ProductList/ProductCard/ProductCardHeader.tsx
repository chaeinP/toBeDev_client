import { RightOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';
import { palette } from '@styles/palette';

export default function ProductCardHeader() {
  return (
    <div css={wrapper}>
      <div css={status}>
        <p>모집중</p>
      </div>
      <div css={category}>
        <p>웹개발</p>
        <p>
          <RightOutlined />
        </p>
        <p>프론트엔드</p>
      </div>
    </div>
  );
}
const wrapper = css`
  display: flex;
`;

const status = css`
  background-color: ${palette.skyblue2};
  color: ${palette.skyblue3};
  border: 1px solid ${palette.skyblue3};
  border-radius: 20px;
  font-size: 13px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  padding: 5px 3px 2px;
`;

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
