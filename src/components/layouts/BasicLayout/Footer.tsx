import { css } from '@emotion/react';
import { palette } from '@styles/palette';
import SpaceLayout from '../SpaceLayout';

export default function Footer() {
  return (
    <footer css={wrapper}>
      <SpaceLayout>
        <p css={text}>toBeDev © 2022 createdBy hagisiroom</p>
        <p css={text}>
          문의 : <a href="mailto:toBeDev@gmail.com">toBeDev@gmail.com</a>
        </p>
      </SpaceLayout>
    </footer>
  );
}

const wrapper = css`
  background-color: ${palette.gray10};
  margin-top: 50px;
  padding: 20px 0;
`;

const text = css`
  line-height: 1.5;
  text-align: center;
  font-size: 14px;
  color: ${palette.opBlack6};
  a {
    text-decoration: none;
    color: ${palette.opBlack6};
  }
`;
