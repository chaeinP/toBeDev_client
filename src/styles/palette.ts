/* 색상 팔레트 */
export const palette = {
  /* main Color */
  orange1: '#ffdfc7',
  orange2: '#ffd9bd',
  orange3: '#ffcaa3',
  orange4: '#ffb782',
  orange5: '#ffa15c',
  orange6: '#ff9242',
  orange7: '#fc842d',
  orange8: '#fa7414',
  orange9: '#ff6900',

  /* yellow */
  yellow9: '#FFB600',
  yellow10: '#FEE93E',

  /* red */
  red9: '#DA1E28',

  /* blue */
  blue5: '#0057B7',
  blue6: '#003569',

  /* gray */
  gray0: '#F5F5F5', // figma 참고
  gray1: '#EBEBEB', // figma 참고
  gray2: '#E0E0E0', // figma 참고
  gray3: '#DEE2E6',
  gray4: '#CCCCCC', // figma 참고
  gray5: '#A3A3A3', // figma 참고
  gray6: '#666666', // figma 참고
  gray7: '#495057',
  gray8: '#343A40',
  gray9: '#212529',
  gray10: '#F8F8F8', // figma 참고
  gray11: '#d8d8d8',
  gray12: '#858585',
  gray13: '#C7C7CD',
  gray14: '#979797',

  /* gray in Wiki */
  wikiGray1: '#FAFAFA',
  wikiGray2: '#434343',
  wikiGray3: '#858585',

  /* black transparent */
  opBlack2: '#00000020',
  opBlack3: '#00000030',
  opBlack4: '#00000040',
  opBlack5: '#00000050',
  opBlack6: '#00000060',
  opBlack8: '#00000080',

  /* white */
  white: '#ffffff',

  /* black */
  black10: '#0A0400',
  black11: '#333333',
};

/* hover 색상 세트 */
interface ButtonColorProps {
  [color: string]: {
    background: string;
    color: string;
    hoverBackground: string;
  };
}

export const buttonColorMap: ButtonColorProps = {
  orange: {
    background: palette.orange9,
    color: 'white',
    hoverBackground: palette.orange8,
  },
  lightGray: {
    background: palette.gray3,
    color: palette.gray7,
    hoverBackground: palette.gray2,
  },
  gray: {
    background: palette.gray5,
    color: 'white',
    hoverBackground: palette.gray4,
  },
  darkGray: {
    background: palette.gray8,
    color: 'white',
    hoverBackground: palette.gray6,
  },
  transparent: {
    background: 'none',
    color: palette.orange6,
    hoverBackground: palette.orange1,
  },
};
