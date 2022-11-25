import Space from '@components/space/Space';
import { css } from '@emotion/react';
import { palette } from '@styles/palette';
import ProductCardHeader from './ProductCardHeader';
import ProductDescription from './ProductDiscription';
import ProductTags from './ProductTags';
import ProductTitle from './ProductTitle';

export default function ProductCard() {
  return (
    <div css={wrapper}>
      <ProductCardHeader />
      <Space height="20px" />
      <ProductTitle />
      <Space height="20px" />
      <ProductDescription />
      <Space height="15px" />
      <ProductTags />
    </div>
  );
}

const wrapper = css`
  border-radius: 10px;
  border: 1px solid ${palette.opBlack2};
  padding: 20px;
`;
