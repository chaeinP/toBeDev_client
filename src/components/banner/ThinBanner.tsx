import SpaceLayout from '@components/layouts/SpaceLayout';
import { css } from '@emotion/react';
import { DESKTOP_MEDIA, MOBILE_MEDIA } from '@styles/media';
import { palette } from '@styles/palette';

export default function ThinBanner() {
  return (
    <SpaceLayout>
      <div css={wrapper}></div>
    </SpaceLayout>
  );
}

const wrapper = css`
  background-color: ${palette.skyblue2};
  border-radius: 10px;
  height: 100px;
  margin: 0 10px;
`;
