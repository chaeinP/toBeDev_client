import { css } from '@emotion/react';
import { palette } from '@styles/palette';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function Contents() {
  return (
    <div css={wrapper}>
      <div className="basic-info">
        <h2>기본 정보</h2>
        <div className="item-container">
          <div className="item">
            <p className="label">모집 일정</p>
            <p>2022-10-10 ~ 2022-11-10</p>
          </div>
          <div className="divider" />
          <div className="item">
            <p className="label">교육 일정</p>
            <p>2022-11-11 ~ 2023-02-03 (24주)</p>
          </div>
          <div className="divider" />
          <div className="item">
            <p className="label">학습 일정(시간)</p>
            <p>주 5일(월~금) 09:00 ~ 18:00</p>
          </div>
          <div className="divider" />
          <div className="item">
            <p className="label">정원</p>
            <p>60명</p>
          </div>
          <div className="divider" />
          <div className="item">
            <p className="label">교육 장소</p>
            <p>서울시 강남구</p>
          </div>
          <div className="divider" />
        </div>
      </div>
      <div className="specific-info">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>## 상세 정보</ReactMarkdown>
      </div>
    </div>
  );
}

const wrapper = css`
  padding: 20px 0px;
  h2 {
    font-size: 20px;
    font-weight: 700;
  }

  .basic-info .item-container {
    margin: 20px 0 30px 0;
    background-color: #fafafa;
    border-radius: 2px;
    border: 0.5px solid ${palette.opBlack2};

    .item {
      margin: 20px;
      display: grid;
      grid-template-columns: 1fr 3fr;
      font-size: 16px;
    }

    .divider {
      height: 0.5px;
      width: 100%;
      &:not(:last-child) {
        border-bottom: 1px solid ${palette.opBlack2};
        margin: 13px 0px;
      }
    }
  }

  .specific-info {
    height: 1000px;
  }
`;
