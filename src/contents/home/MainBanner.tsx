import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';
import {
  DESKTOP_MEDIA,
  MAX_DESKTOP_WIDTH,
  MOBILE_MEDIA,
  MOBILE_WIDTH,
  TABLET_MEDIA,
  TABLET_WIDTH,
} from '@styles/media';
import { palette } from '@styles/palette';
import { Carousel } from 'antd';
import { CarouselRef } from 'antd/es/carousel';
import { useRef } from 'react';

export default function MainBanner() {
  const carousel = useRef<CarouselRef>(null);
  const handleNext = () => carousel.current?.next();
  const handlePrev = () => carousel.current?.prev();

  const bannerList = [<div key={1}>1</div>, <div key={2}>2</div>];
  return (
    <div css={wrapper}>
      <Carousel
        ref={carousel}
        autoplay
        autoplaySpeed={10000}
        effect="fade"
        draggable
      >
        {bannerList.map((banner, idx) => {
          return (
            <div key={idx} css={bannerWrapper}>
              <div css={inner}>{banner}</div>
            </div>
          );
        })}
      </Carousel>
      <div css={pcOnly}>
        <button type="button" css={controllBtn('left')} onClick={handlePrev}>
          <LeftOutlined style={{ color: palette.white, fontSize: '28px' }} />
        </button>
        <button type="button" css={controllBtn('right')} onClick={handleNext}>
          <RightOutlined style={{ color: palette.white, fontSize: '28px' }} />
        </button>
      </div>
    </div>
  );
}

const wrapper = css`
  background-color: grey;
  width: 100%;
`;
const bannerWrapper = css`
  width: 100%;
  background-color: blue;
`;

const inner = css`
  margin: auto;
  position: relative;

  // 데스크탑
  ${DESKTOP_MEDIA} {
    max-width: ${MAX_DESKTOP_WIDTH};
    height: 350px;
  }

  // 태블릿
  ${TABLET_MEDIA} {
    padding-top: 20%;
    margin-top: 140px;
  }

  // 모바일
  ${MOBILE_MEDIA} {
    padding-top: 10%;
    margin-top: 140px;
  }
`;

const pcOnly = css`
  @media (max-width: ${TABLET_WIDTH}) {
    display: none;
  }
`;

const controllBtn = (position: string) => css`
  width: 40px;
  height: 40px;
  margin: auto;
  background: none;
  position: absolute;
  top: -280px;
  bottom: 0;
  ${`${position}`}: 40px;
`;
