import { css } from '@emotion/react';
import { DESKTOP_MEDIA, MOBILE_MEDIA } from '@styles/media';
import { palette } from '@styles/palette';

export default function ProductTags() {
  const tagList = [
    '온라인',
    '오프라인',
    '지원금지급',
    'KDT',
    'SEASAC',
    '비전공자가능',
    '선발과정없음',
    '기간3개월이내',
    '직장/학업병행가능',
    '장비지원',
    '중식제공',
    '취업지원',
  ];

  return (
    <div css={wrapper}>
      <div className="gradient-box" />
      <div className="tag-list">
        <ul>
          {tagList.map((tag, i) => (
            <li id={i + ''} key={i}>
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const wrapper = css`
  max-width: 100%;

  .gradient-box {
    position: absolute;
    margin-top: 15px;
    margin-right: 0px;
    right: 0;
    z-index: 999;
    height: 22px;
    width: 70px;
    background-image: linear-gradient(90deg, transparent 0%, white 80%);
  }

  .tag-list {
    position: absolute;
    white-space: nowrap;
    display: flex;
    max-width: 90%;
    overflow: hidden;
    overflow-x: scroll;
    padding: 15px 0 10px;
    &::-webkit-scrollbar {
      display: none; /* 크롬, 사파리, 오페라, 엣지 */
    }

    ul {
      display: flex;
      li {
        background-color: rgb(219, 238, 252);
        border-radius: 10px;
        font-size: 12px;
        padding: 5px 10px;
        &:not(:last-of-type) {
          margin-right: 10px;
        }
      }
    }
  }
`;
