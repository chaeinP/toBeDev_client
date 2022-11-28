import BootcampCategoryLabel from '@components/label/BootcampCategory';
import BootcampStatusLable from '@components/label/BootcampStatus';
import { css } from '@emotion/react';

export default function ProductCardHeader() {
  return (
    <div css={wrapper}>
      <BootcampStatusLable label="모집중" />
      <BootcampCategoryLabel
        firstCategory="웹개발"
        secondCategory="프론트엔드"
      />
    </div>
  );
}

const wrapper = css`
  display: flex;
`;
