import { css } from '@emotion/react';
import { DESKTOP_MEDIA, MIN_MOBILE_WIDTH } from '@styles/media';
import { palette } from '@styles/palette';
import { useEffect, useState } from 'react';
import { throttle } from 'lodash';

export default function BottomBar() {
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [isScrollDown, setIsScrollDown] = useState<boolean>(false);

  const throttledScrollDown = () =>
    throttle(() => {
      if (window.scrollY > lastScrollY) setIsScrollDown(true);
      else setIsScrollDown(false);
      setLastScrollY(window.scrollY);
    });

  useEffect(() => window.addEventListener('scroll', throttledScrollDown()));

  return (
    <div css={wrapper(isScrollDown)}>
      <div className="text">
        <p className="title">제로베이스 데이터 스쿨</p>
        <p className="description">어쩌고 저쩌고 우리가 짱 우리가 짱</p>
      </div>
      <div className="cta">
        <button>바로가기</button>
      </div>
    </div>
  );
}

const wrapper = (isScrollDown: boolean) => css`
  ${DESKTOP_MEDIA} {
    display: none;
  }

  ${isScrollDown
    ? `
  	transition: transform 0.2s linear;
  	transform:translateY(60px);
  `
    : `
  	transition: transform 0.2s linear;
  	transform:translateY(0px);
  `}
  width:100%;
  min-width: ${MIN_MOBILE_WIDTH};
  height: 60px;

  background-color: ${palette.skyblue3};
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;

  .text {
    flex: 1;
    color: white;
    padding: 10px 10px;
    .title {
      font-size: 16px;
      font-weight: 600;
    }
    .description {
      margin-top: 5px;
      font-size: 12px;
    }
  }

  .cta {
    button {
      font-size: 14px;
      display: block;
      padding: 10px 20px;
      margin: auto 0;
      border-radius: 10px;
      background: none;
      border: 1px solid white;
      color: white;
      margin-right: 10px;
    }
  }
`;
