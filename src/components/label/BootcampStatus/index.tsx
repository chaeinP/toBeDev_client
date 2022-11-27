import { css } from '@emotion/react';
import { palette } from '@styles/palette';

export interface BootcampStatusLableProps {
  label: keyof typeof labelColor;
  width?: string;
  fontSize?: string;
  borderRadius?: string;
}

const labelColor = {
  모집중: {
    'background-color': palette.skyblue2,
    color: palette.skyblue3,
    'border-color': palette.skyblue3,
  },
} as const;

export default function BootcampStatusLable({
  label,
  width,
  fontSize,
  borderRadius,
}: BootcampStatusLableProps) {
  return (
    <div css={wrapper(label, width, fontSize, borderRadius)}>
      <p>{label}</p>
    </div>
  );
}

const wrapper = (
  label: keyof typeof labelColor,
  width?: string,
  fontSize?: string,
  borderRadius?: string,
) => css`
  background-color: ${labelColor[label]['background-color']};
  color: ${labelColor[label]['color']};
  border: 1px solid ${labelColor[label]['border-color']};
  border-radius: ${borderRadius || '20px'};
  font-size: ${fontSize || '13px'};
  width: ${width || '60px'};
  display: flex;
  font-weight: 700;
  justify-content: center;
  align-items: center;
  padding: 5px 3px 2px;
`;
