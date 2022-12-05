import { css } from '@emotion/react';
import Logo from '@components/logo/Logo';
import NavBar from './NavBar';
import {
  DESKTOP_MEDIA,
  MAX_DESKTOP_WIDTH,
  MIN_MOBILE_WIDTH,
  MOBILE_MEDIA,
} from '@styles/media';
import { palette } from '@styles/palette';
import Link from 'next/link';

export default function Header() {
  return (
    <header css={wrapper}>
      <div className="logo">
        <Link href={'/'}>
          <Logo />
        </Link>
      </div>
      {/*  <NavBar /> */}
    </header>
  );
}

const wrapper = css`
  ${DESKTOP_MEDIA} {
    width: 100%;
    max-width: ${MAX_DESKTOP_WIDTH};
    margin: 0 auto;
  }
  .logo {
    padding: 15px 10px;
    a {
      text-decoration: none;
    }
  }
`;
