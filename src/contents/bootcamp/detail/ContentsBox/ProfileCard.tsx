import { css } from '@emotion/react';
import { palette } from '@styles/palette';
import { useEffect } from 'react';

export default function ProfileCard() {
  const tagList = ['온라인', '오프라인', '지원금지급', 'KDT'];

  useEffect(() =>
    window.addEventListener('scroll', () => {
      console.log(window.scrollY);
    }),
  );

  return (
    <div css={wrapper}>
      <div className="profileImg">{/* <Image src="" alt="logo" /> */}</div>
      <p className="title">제로베이스 데이터 스쿨</p>
      <ul className="tags">
        {tagList.map((tag, i) => (
          <li key={i}>{tag}</li>
        ))}
      </ul>
      <button>바로가기</button>
    </div>
  );
}

const wrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 350px;
  border: 0.5px solid ${palette.opBlack2};
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  min-width: 250px;
  padding: 0px 10px;

  .profileImg {
    margin-top: 25px;
    width: 95px;
    height: 95px;
    border-radius: 50px;
    background-color: rgb(219, 238, 252);
  }

  .title {
    margin-top: 20px;
    font-size: 25px;
    font-weight: 500;
  }

  .tags {
    margin-top: 20px;
    text-align: center;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 10px;
    column-gap: 10px;

    li {
      width: 60px;
      margin: auto 0;
      background-color: rgb(219, 238, 252);
      font-size: 12px;
      padding: 5px 10px;
    }
  }

  button {
    margin-top: 30px;
    padding: 15px;
    width: 80%;
    border-radius: 5px;
    background-color: ${palette.skyblue3};
    color: white;
  }
`;
