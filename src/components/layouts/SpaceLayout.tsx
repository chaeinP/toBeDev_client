import { css } from '@emotion/react';
import { DESKTOP_MEDIA, MAX_DESKTOP_WIDTH, MOBILE_MEDIA } from '@styles/media';
import { ReactNode } from 'react';

export default function SpaceLayout({ children }: { children: ReactNode }) {
  return <div css={wrapper}>{children}</div>;
}

const wrapper = css`
  ${DESKTOP_MEDIA} {
    max-width: ${MAX_DESKTOP_WIDTH};
    margin: 0 auto;
    padding: 0 20px;
  }

  ${MOBILE_MEDIA} {
    min-width: 333px;
    padding: 0 10px;
  }
`;
