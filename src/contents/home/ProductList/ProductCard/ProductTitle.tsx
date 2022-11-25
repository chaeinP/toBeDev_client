import { css } from '@emotion/react';

export default function ProductTitle() {
  return (
    <div css={title}>
      <h2>제로베이스 데이터 스쿨 13기</h2>
      <p>데이원 컴퍼니</p>
    </div>
  );
}

const title = css`
  padding: 0px 2px;
  h2 {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 8px;
  }
  p {
    font-size: 15px;
    font-weight: 500;
  }
`;
