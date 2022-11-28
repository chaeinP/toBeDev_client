import SpaceLayout from '@components/layouts/SpaceLayout';
import { css } from '@emotion/react';

export default function ContentsBox() {
  return (
    <SpaceLayout>
      <div css={wrapper}>
        <div>1</div>
        <div>2</div>
      </div>
    </SpaceLayout>
  );
}

const wrapper = css`
  display: grid;
  grid-template-columns: 3fr 1fr;
  column-gap: 20px;
`;
