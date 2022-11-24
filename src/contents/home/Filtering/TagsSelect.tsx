import { css } from '@emotion/react';

export interface TagsSelectProps {
  selectedTags: number[];
  handleSelectTag: (id: number) => void;
}

export default function TagsSelect({
  selectedTags,
  handleSelectTag,
}: TagsSelectProps) {
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
    <div css={tags}>
      {tagList.map((tag, i) => (
        <button
          css={button(selectedTags.includes(i))}
          id={i + ''}
          key={i}
          onClick={(e) => {
            handleSelectTag(+e.currentTarget.id);
          }}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}

const tags = css`
  margin-top: 15px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const button = (clicked: boolean) => css`
  display: inline-block;
  background-color: rgb(219, 238, 252);
  ${clicked &&
  `border: 1px solid rgb(46, 100, 248);
  color:rgb(20, 81, 250);
  `}

  border-radius: 10px;
  font-size: 12px;
  padding: 5px 10px;
  margin-right: 10px;
  margin-bottom: 10px;
`;
