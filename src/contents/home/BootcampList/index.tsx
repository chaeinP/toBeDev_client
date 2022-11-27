import SpaceLayout from '@components/layouts/SpaceLayout';
import { css } from '@emotion/react';
import { MOBILE_MEDIA } from '@styles/media';
import ProductCard from './ProductCard';

export default function BootcampList() {
  return (
    <SpaceLayout>
      <div css={grid}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </SpaceLayout>
  );
}

const grid = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 200px;
  row-gap: 20px;
  column-gap: 20px;
  padding: 10px;

  ${MOBILE_MEDIA} {
    grid-template-columns: repeat(1, 1fr);
  }
`;
