import Divider from '@components/divider/Divider';
import { css } from '@emotion/react';

export default function ProductDescription() {
  return (
    <div css={wrapper}>
      <p>2022. 12. 01 ~ 2023. 05. 31</p>
      <Divider />
      <p>360만원</p>
    </div>
  );
}

const wrapper = css`
  padding: 2px;
  display: flex;
  font-size: 15px;
`;
