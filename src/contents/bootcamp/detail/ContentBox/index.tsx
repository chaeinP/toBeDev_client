import SpaceLayout from '@components/layouts/SpaceLayout';
import { css } from '@emotion/react';
import { DESKTOP_MEDIA, MOBILE_MEDIA } from '@styles/media';
import BottomBar from './BottomBar';
import Content from './Content';
import ProfileCard from './ProfileCard';

export interface ContentBoxProps {
  scrollOn: boolean;
}

export default function ContentBox({ scrollOn }: ContentBoxProps) {
  const profileCardProps = {
    scrollOn,
  };

  return (
    <SpaceLayout>
      <div css={wrapper}>
        <Content />
        <ProfileCard {...profileCardProps} />
      </div>
      <BottomBar />
    </SpaceLayout>
  );
}

const wrapper = css`
  display: grid;
  column-gap: 30px;
  ${DESKTOP_MEDIA} {
    grid-template-columns: 3fr 1fr;
    padding: 0 20px;
  }
  ${MOBILE_MEDIA} {
    grid-template-columns: 1fr;
    padding: 0 15px;
  }
`;
