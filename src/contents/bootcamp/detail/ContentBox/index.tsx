import SpaceLayout from '@components/layouts/SpaceLayout';
import { css } from '@emotion/react';
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
    </SpaceLayout>
  );
}

const wrapper = css`
  display: grid;
  grid-template-columns: 3fr 1fr;
  column-gap: 30px;
  padding: 0 20px;
`;
