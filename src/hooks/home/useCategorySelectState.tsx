import { useState } from 'react';

export interface UseCategorySelectStateProps {
  categoryList: { first: string; second: string[] }[];
}

export default function useCategorySelectState({
  categoryList,
}: UseCategorySelectStateProps) {
  const firstCategoryItems = categoryList.map(({ first }, i) => ({
    label: first,
    key: i,
  }));

  const [firstCategory, setFirstCategory] = useState(categoryList[0].first);
  const [secondCategory, setSecondCategory] = useState(
    categoryList[0].first[0],
  );
  const [secondCategoryItems, setSecondCategoryItems] = useState([
    {
      label: categoryList[0].second[0],
      key: 0,
    },
  ]);

  const handleFirstCategory = (key: number) => {
    setFirstCategory(categoryList[key].first);

    const secondCategoryItems = categoryList[key].second.map((label, i) => {
      return { label, key: i };
    });
    setSecondCategory(secondCategoryItems[0].label);
    setSecondCategoryItems(secondCategoryItems);
  };

  const handleSecondCategory = (key: number) => {
    setSecondCategory(secondCategoryItems[key].label);
  };

  return {
    firstCategory,
    firstCategoryItems,
    secondCategory,
    secondCategoryItems,
    handleFirstCategory,
    handleSecondCategory,
  };
}
