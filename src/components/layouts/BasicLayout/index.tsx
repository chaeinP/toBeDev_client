import { ReactNode } from 'react';
import { css } from '@emotion/react';
import Header from './Header';
import Footer from './Footer';
import { palette } from '@styles/palette';

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
`;
