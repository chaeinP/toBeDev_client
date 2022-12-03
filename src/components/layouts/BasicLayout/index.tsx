import { ReactNode } from 'react';
import { css } from '@emotion/react';
import Header from './Header';
import Footer from './Footer';
import {
  DESKTOP_MEDIA,
  MAX_DESKTOP_WIDTH,
  MIN_MOBILE_WIDTH,
  MOBILE_MEDIA,
} from '@styles/media';

export default function BasicLayout({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return (
    <div css={wrapper}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

const wrapper = css`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  margin: 0 auto;

  ${DESKTOP_MEDIA} {
    max-width: ${MAX_DESKTOP_WIDTH};
  }

  ${MOBILE_MEDIA} {
    min-width: ${MIN_MOBILE_WIDTH};
  }
`;
