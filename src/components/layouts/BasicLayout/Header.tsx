import { css } from '@emotion/react';
import Logo from '@components/logo/Logo';
import NavBar from './NavBar';
import { DESKTOP_MEDIA, MAX_DESKTOP_WIDTH, TABLET_MEDIA } from '@styles/media';
import { palette } from '@styles/palette';
import Link from 'next/link';

export default function Header() {
  return (
    <header css={headerWrapper}>
      <div css={headerContent}>
        <div css={logo}>
          <Link href={'/'}>
            <Logo />
          </Link>
        </div>
        <NavBar />
      </div>
    </header>
  );
}

const headerWrapper = css`
  top: 0;
  z-index: 99;
  width: 100%;
  border-bottom: 1px solid ${palette.gray11};
`;

const headerContent = css`
  ${DESKTOP_MEDIA} {
    max-width: ${MAX_DESKTOP_WIDTH};
    display: flex;
    align-items: center;
    margin: 0 auto;
    padding: 20px;
  }

  ${TABLET_MEDIA} {
    min-width: 330px;
    padding: 15px 20px;
  }
`;

const logo = css`
  a {
    text-decoration: none;
  }
`;