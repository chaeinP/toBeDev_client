import SpaceLayout from '@components/layouts/SpaceLayout';
import { css } from '@emotion/react';

import { useState } from 'react';
import Category from './Category';

export default function Filterting() {
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
      </div>
    </SpaceLayout>
  );
}

const wrapper = css``;
