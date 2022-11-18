import { ReactNode } from 'react';
import { css } from '@emotion/react';
import Header from './Header';
import Footer from './Footer';

export default function BasicLayout({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return (
    <div>
      <Header />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
}
