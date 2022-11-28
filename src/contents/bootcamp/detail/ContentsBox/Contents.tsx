import { css } from '@emotion/react';
import { palette } from '@styles/palette';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function Contents() {
  return (
    <div css={wrapper}>
      <h2>기본 정보</h2>
      <div className="basic-info">
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
      <ReactMarkdown remarkPlugins={[remarkGfm]}>## 상세 정보</ReactMarkdown>
    </div>
  );
}

const wrapper = css`
  width: 90%;
  padding: 10px 20px;
  margin: 0 auto;
  h2 {
    font-size: 25px;
    font-weight: 700;
  }

  .basic-info {
    width: 100%;
    margin: 30px 0 50px 0;
    .item {
      display: flex;
      justify-content: space-between;
      font-size: 17px;
      .label {
        font-weight: 700;
      }
    }

    .divider {
      margin: 13px 0px;
      height: 0.5px;
      width: 100%;
      border-bottom: 1px solid ${palette.opBlack2};
    }
  }
`;
