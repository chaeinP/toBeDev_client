import { css } from '@emotion/react';

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
    <div>
      {tagList.map((tag, i) => (
        <button css={button} id={i + ''} key={i}>
          {tag}
        </button>
      ))}
    </div>
  );
}

const button = css`
  border-radius: 10px;
  font-size: 12px;
  padding: 5px 10px;
  margin-right: 10px;
  margin-bottom: 10px;
`;
