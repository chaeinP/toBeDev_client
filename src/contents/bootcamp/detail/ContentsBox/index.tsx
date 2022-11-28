import SpaceLayout from '@components/layouts/SpaceLayout';
import { css } from '@emotion/react';
import Contents from './Contents';
import ProfileCard from './ProfileCard';

export default function ContentsBox() {
  return (
    <SpaceLayout>
      <div css={wrapper}>
        <Contents />
        <ProfileCard />
      </div>
    </SpaceLayout>
  );
}

const wrapper = css`
  display: grid;
  grid-template-columns: 3fr 1.5fr;
  column-gap: 20px;
`;
