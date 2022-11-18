import { css } from '@emotion/react';
import Logo from 'src/components/logo/Logo';
import NavBar from './NavBar';

export default function Header() {
  return (
    <header css={wrapper}>
      <div>
        <Logo />
        <NavBar />
      </div>
    </header>
  );
}

const wrapper = css`
  display: 'flex';
`;
