import { css } from '@emotion/react';
import { palette } from '@styles/palette';

export default function Divider() {
  return <div className="divider" css={wrapper} />;
}

const wrapper = css`
  width: 1.5px;
  background-color: ${palette.opBlack5};
  margin: 0 10px;
`;
