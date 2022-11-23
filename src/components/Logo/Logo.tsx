import { css } from '@emotion/react';
import { DESKTOP_MEDIA, MOBILE_MEDIA } from '@styles/media';

import { palette } from '@styles/palette';
import { ReactElement } from 'react';

export default function Logo(): ReactElement {
  return <span css={logo}>toBeDev</span>;
}

const logo = css`
  font-weight: 700;
  color: ${palette.black10};

  ${DESKTOP_MEDIA} {
    font-size: 25px;
  }

  ${MOBILE_MEDIA} {
    font-size: 20px;
  }
`;
