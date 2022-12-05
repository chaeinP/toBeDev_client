import BootcampCategoryLabel from '@components/label/BootcampCategory';
import BootcampStatusLable from '@components/label/BootcampStatus';
import SpaceLayout from '@components/layouts/SpaceLayout';
import Space from '@components/space/Space';
import { css } from '@emotion/react';
import {
  DESKTOP_MEDIA,
  MIDDLE_MOBILE_WIDTH,
  MIN_MOBILE_WIDTH,
  MOBILE_MEDIA,
} from '@styles/media';
import { palette } from '@styles/palette';
import useIsMobile from 'src/hooks/useIsMobile';

export default function TitleBanner() {
  const tagList = [
    '온라인',
    '오프라인',
    '지원금지급',
    'KDT',
    'SEASAC',
    '비전공자가능',
  ];

  const isMobile = useIsMobile();
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
            <Space height={isMobile ? '10px' : '20px'} />
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

  ${MOBILE_MEDIA} {
    .content {
      margin: 10px;
      .category {
        margin-bottom: 20px;
        display: flex;
      }

      .title {
        text-align: center;
        h1 {
          @media screen and (max-width: ${MIDDLE_MOBILE_WIDTH}) {
            font-size: 10vw;
          }
          @media screen and (max-width: ${MIN_MOBILE_WIDTH}) {
            font-size: 32px;
          }
          font-size: 46px;
          font-weight: 700;
        }

        .tags {
          margin: auto 0;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;

          li {
            background-color: rgb(219, 238, 252);
            border-radius: 10px;
            font-size: 12px;
            padding: 5px 10px;
            margin-right: 10px;
            margin-top: 5px;
          }
        }
      }
    }
  }

  ${DESKTOP_MEDIA} {
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
  }
`;
