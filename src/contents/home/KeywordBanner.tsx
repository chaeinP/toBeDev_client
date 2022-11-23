import SpaceLayouts from '@components/layouts/SpaceLayout';
import { css } from '@emotion/react';
import { DESKTOP_MEDIA, MOBILE_MEDIA } from '@styles/media';
import { Col, Row } from 'antd';

export default function KeywordBanner() {
  return (
    <section>
      <h2 css={title}>내게 딱 맞는 개발자 교육을{'\n'}찾고있다면?</h2>
      <div css={grid}>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
      </div>
    </section>
  );
}

const grid = css`
  display: grid;

  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 200px;
  row-gap: 16px;
  column-gap: 16px;

  .item {
    background-color: grey;
    border-radius: 10px;
  }

  ${MOBILE_MEDIA} {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 100px;
    row-gap: 16px;

    .item {
      background-color: grey;
      border-radius: 10px;
    }
  }

  ${MOBILE_MEDIA} {
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: 100px;
    row-gap: 16px;

    .item {
      background-color: grey;
      border-radius: 10px;
    }
  }
`;

const title = css`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 700;
  white-space: pre-wrap;
  line-height: 1.5;
`;

const col = css`
  background-color: blue;
  height: 100px;
  border-radius: 10px;
`;
