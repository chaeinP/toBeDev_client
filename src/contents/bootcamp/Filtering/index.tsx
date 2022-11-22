import SpaceLayout from '@components/layouts/SpaceLayout';
import Space from '@components/space/Space';
import { css } from '@emotion/react';
import { TABLET_MEDIA } from '@styles/media';
import { Tag } from 'antd';

import { useEffect, useState } from 'react';
import Category from './Category';
import OnOfflineSelect from './OnOfflineSelect';
import PeriodSelect from './PeriodSelect';
import PriceSelect from './PriceSelect';

export default function Filterting() {
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

  const categoryList = [
    { label: '전체', sub: ['전체'] },
    { label: '웹 개발', sub: ['전체', '프론트엔드', '백엔드'] },
    { label: '데이터 사이언스', sub: ['전체', '인공지능', '데이터 분석'] },
  ];
  const firstCategoryItems = categoryList.map((el, i) => ({
    label: el.label,
    key: i,
  }));
  const [firstCategory, setFirstCategory] = useState(categoryList[0].label);
  const [secondCategory, setSecondCategory] = useState(categoryList[0].sub[0]);
  const [secondCategoryItems, setSecondCategoryItems] = useState([
    {
      label: categoryList[0].sub[0],
      key: 0,
    },
  ]);
  const [selectedTags, setSelectedTags] = useState<number[]>([]);

  const handleFirstCategory = (key: number) => {
    setFirstCategory(categoryList[key].label);

    const secondCategoryItems = categoryList[key].sub.map((el, i) => {
      return { label: el, key: i };
    });
    setSecondCategory(secondCategoryItems[0].label);
    setSecondCategoryItems(secondCategoryItems);
  };

  const handleSecondCategory = (key: number) => {
    setSecondCategory(secondCategoryItems[key].label);
  };

  const handleSelectTag = (i: number) => {
    if (selectedTags.includes(i)) {
      const filteredTags = selectedTags.filter((el) => el !== i);
      setSelectedTags(filteredTags);
    } else {
      setSelectedTags([...selectedTags, i]);
    }
  };

  const categoryProps = {
    firstCategory,
    firstCategoryItems,
    secondCategory,
    secondCategoryItems,
    handleFirstCategory,
    handleSecondCategory,
  };
  return (
    <SpaceLayout>
      <div css={wrapper}>
        <Category {...categoryProps} />
        <div css={subFilter}>
          <PriceSelect />
          <Space width="20px" />
          <PeriodSelect />
          <Space width="20px" />
          <OnOfflineSelect />
        </div>

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
      </div>
    </SpaceLayout>
  );
}

const wrapper = css`
  margin-top: 20px;
  width: 100%;
`;

const subFilter = css`
  margin-top: 30px;
  display: flex;
  width: 100%;
  margin-right: 30px;
`;

const tags = css`
  margin-top: 30px;
  width: 100%;
  display: flex;
  ${TABLET_MEDIA} {
    flex-wrap: wrap;
  }
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
