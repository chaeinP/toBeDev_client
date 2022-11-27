import BootcampCategoryLabel from '@components/label/BootcampCategory';
import BootcampStatusLable from '@components/label/BootcampStatus';
import SpaceLayout from '@components/layouts/SpaceLayout';
import Space from '@components/space/Space';
import { css } from '@emotion/react';
import { palette } from '@styles/palette';

export default function TitleBanner() {
  const tagList = [
    '온라인',
    '오프라인',
    '지원금지급',
    'KDT',
    'SEASAC',
    '비전공자가능',
  ];

  return (
    <SpaceLayout>
      <div css={wrapper}>
        <div className="content">
          <div className="category">
            <BootcampStatusLable label="모집중" />
            <BootcampCategoryLabel
              firstCategory="웹개발"
              secondCategory="프론트엔드"
            />
          </div>
          <div className="title">
            <h1>제로베이스 데이터 스쿨</h1>
            <Space height={'20px'} />
            <ul className="tags">
              {tagList.map((tag, key) => {
                return <li key={key}>{tag}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </SpaceLayout>
  );
}

const wrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  background-color: ${palette.opBlack2};

  .content {
    .category {
      margin-bottom: 20px;
      display: flex;
    }

    .title {
      display: flex;
      flex-direction: column;
      align-items: center;

      h1 {
        font-size: 50px;
        font-weight: 700;
      }

      .tags {
        margin: auto 0;
        display: flex;

        li {
          background-color: rgb(219, 238, 252);
          border-radius: 10px;
          font-size: 12px;
          padding: 5px 10px;
          margin-right: 10px;
        }
      }
    }
  }
`;
