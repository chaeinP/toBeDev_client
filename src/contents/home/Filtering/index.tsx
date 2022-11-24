import SpaceLayout from '@components/layouts/SpaceLayout';
import Space from '@components/space/Space';
import { css } from '@emotion/react';
import { MOBILE_MEDIA } from '@styles/media';
import { palette } from '@styles/palette';

import { useState } from 'react';
import Category from './Category';
import Category_ from './Category_';
import OnOfflineSelect from './OnOfflineSelect';
import PeriodSelect from './PeriodSelect';
import PriceSelect from './PriceSelect';
import TagsSelect from './TagsSelect';

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

  const tagsSelectProps = {
    selectedTags,
    handleSelectTag,
  };

  return (
    <SpaceLayout>
      <div css={wrapper}>
        <Category_ />

        {/* <Category {...categoryProps} /> */}
        <div css={subFilter}>
          <PriceSelect />
          <Space width="20px" vertical={false} />
          <PeriodSelect />
          <Space width="20px" vertical={false} />
          <OnOfflineSelect />
        </div>

        <TagsSelect {...tagsSelectProps} />
      </div>
    </SpaceLayout>
  );
}

const wrapper = css`
  border-bottom: 1px solid ${palette.opBlack2};
  padding: 10px;
  margin-top: 10px;
`;

const subFilter = css`
  margin-top: 30px;
  display: flex;
  width: 100%;
  margin-right: 20px;
  flex-wrap: wrap;

  ${MOBILE_MEDIA} {
    margin-top: 20px;
  }
`;
