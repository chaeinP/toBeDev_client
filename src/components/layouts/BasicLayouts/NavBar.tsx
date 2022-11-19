import { css } from '@emotion/react';
import { DESKTOP_MEDIA, TABLET_MEDIA } from '@styles/media';
import { palette } from '@styles/palette';
import Link from 'next/link';

export default function NavBar() {
  const menuInfo = [
    { title: '취업교육정보', to: '/bootcamp' },
    { title: '취업교육후기', to: '/review' },
    { title: 'FAQ', to: '/faq' },
  ];
  return (
    <div>
      <nav css={navBarWrapper}>
        <ul>
          {menuInfo.map((menu) => {
            return (
              <li key={Math.random()}>
                <Link href={menu.to} css={link}>
                  {menu.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

const navBarWrapper = css`
  margin: auto 0;
  ul {
    display: flex;
    li: nth-of-type(1) {
      ${DESKTOP_MEDIA} {
        margin-left: 70px;
      }
    }
    li {
      ${DESKTOP_MEDIA} {
        margin-left: 30px;
        margin-right: 40px;
        font-size: 16px;
      }

      ${TABLET_MEDIA} {
        margin-top: 10px;
        margin-right: 30px;
        font-size: 14px;
      }
    }
  }
`;

const link = css`
  display: block;
  color: ${palette.black10};
  text-decoration: none;
`;
