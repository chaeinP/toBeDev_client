import { css } from '@emotion/react';
import { MOBILE_MEDIA } from '@styles/media';
import { palette } from '@styles/palette';
import { Button, Slider } from 'antd';
import { useState } from 'react';

export interface SelectSliderProps {
  value: number[];
  handleValue: (value: [number, number]) => void;
  minLabel: string;
  maxLabel: string;
  step: number;
  min: number;
  max: number;
  handleCancel: () => void;
  handleConfirm: () => void;
}

export default function SelectSlider({
  value,
  handleValue,
  minLabel,
  maxLabel,
  step,
  min,
  max,
  handleCancel,
  handleConfirm,
}: SelectSliderProps) {
  return (
    <>
      <div css={slider}>
        <Slider
          defaultValue={value as [number, number]}
          onAfterChange={(v: [number, number]) => handleValue(v)}
          range={{ draggableTrack: true }}
          marks={{
            [min]: {
              style: { marginTop: '5px', fontSize: '12px' },
              label: minLabel,
            },
            [max]: {
              style: { marginTop: '5px', fontSize: '12px' },
              label: maxLabel,
            },
          }}
          step={step}
          min={min}
          max={max}
        />
      </div>
      <div css={bottomBar}>
        <Button type="text" onMouseDown={handleCancel}>
          취소
        </Button>
        <Button type="link" onMouseDown={handleConfirm}>
          확인
        </Button>
      </div>
    </>
  );
}

const slider = css`
  margin: 25px 25px;

  ${MOBILE_MEDIA} {
    margin: 20px 15px;
  }
`;

const bottomBar = css`
  height: 40px;
  border-top: 1px solid ${palette.opBlack2};
  display: flex;
  justify-content: flex-end;
  align-items: center;

  ${MOBILE_MEDIA} {
    display: none;
  }
`;
