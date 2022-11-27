import SpaceLayout from '@components/layouts/SpaceLayout';
import Space from '@components/space/Space';
import { css } from '@emotion/react';
import { MOBILE_MEDIA } from '@styles/media';
import { palette } from '@styles/palette';

import useCategorySelectState from 'src/hooks/home/useCategorySelectState';
import useDropdownSelectState from 'src/hooks/home/useDropdownSelectState';
import useTagSelectState from 'src/hooks/home/useTagSelectState';
import Category from './Category';
import Category_ from './Category_';
import DropdownSelect from './DropdownSelect';
import TagsSelect from './TagsSelect';

export default function Filterting() {
  /**
   * todo 카테고리 fetch
   */
  const categoryList = [
    { first: '전체', second: ['전체'] },
    { first: '웹 개발', second: ['전체', '프론트엔드', '백엔드'] },
    { first: '데이터 사이언스', second: ['전체', '인공지능', '데이터 분석'] },
  ];
  const categoryState = useCategorySelectState({ categoryList });

  /**
   * todo tag fetch
   */
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
  const tagState = useTagSelectState();

  const periodOptions = ['전체', '0 ~ 4개월', '5 ~ 8개월', '9 ~ 12개월+'];
  const periodSelectState = useDropdownSelectState({ options: periodOptions });

  const priceOptions = [
    '전체',
    '무료',
    '300만원 미만',
    '300 ~ 600만원 미만',
    '600 ~ 1000만원 미만',
    '1000만원 이상',
  ];
  const priceSelectState = useDropdownSelectState({ options: priceOptions });

  const onOfflineOptions = ['전체', '오프라인', '온라인', '혼합'];
  const onOfflineState = useDropdownSelectState({ options: onOfflineOptions });

  const categoryProps = { ...categoryState };
  const tagProps = { ...tagState, tagList };
  const priceSelectProps = {
    ...priceSelectState,
    label: '비용',
    width: '200px',
    left: '0px',
  };
  const periodSelectProps = {
    ...periodSelectState,
    label: '기간',
    width: '120px',
    left: '38px',
  };
  const onOfflineSelectProps = {
    ...onOfflineState,
    label: '온/오프라인',
    width: '100px',
    left: '75px',
  };

  return (
    <SpaceLayout>
      <div css={wrapper}>
        {/* <Category_ /> */}

        <Category {...categoryProps} />
        <div css={subFilter}>
          <DropdownSelect {...priceSelectProps} />
          <Space width="20px" vertical={false} />
          <DropdownSelect {...periodSelectProps} />
          <Space width="20px" vertical={false} />
          <DropdownSelect {...onOfflineSelectProps} />
        </div>

        <TagsSelect {...tagProps} />
        <Space height="20px" />
        <div
          style={{
            height: '1px',
            backgroundColor: palette.opBlack2,
            margin: '0 3px',
          }}
        ></div>
      </div>
    </SpaceLayout>
  );
}

const wrapper = css`
  /* border-bottom: 2px solid ${palette.opBlack2}; */
  padding: 10px;
  margin-top: 10px;
`;

const subFilter = css`
  margin-top: 20px;
  display: flex;
  width: 100%;
  margin-right: 20px;
  flex-wrap: wrap;

  ${MOBILE_MEDIA} {
    margin-top: 20px;
  }
`;
