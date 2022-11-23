import { css } from '@emotion/react';
import { palette } from '@styles/palette';

export default function ThinBanner() {
  return <div css={wrapper}></div>;
}

const wrapper = css`
  background-color: ${palette.skyblue2};
  border-radius: 10px;
  height: 100px;
`;
