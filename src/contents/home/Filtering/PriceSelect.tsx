import DropdownButton from '@components/dropdown/Button';
import { css } from '@emotion/react';
import { palette } from '@styles/palette';
import { Button, Slider } from 'antd';
import { useState } from 'react';

export default function PriceSelect() {
  const [priceRange, setPriceRange] = useState<number[]>([0, 1000]);
  const [prevValue, setPrevValue] = useState<number[] | null>(null);
  const [dropdownOn, setDropdown] = useState(false);

  const handleCancel = () => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    setPriceRange(prevValue!);
    setPrevValue(null);
    setDropdown(false);
  };

  const handleConfirm = () => {
    setPrevValue(null);
    setDropdown(false);
  };

  const handleDropdown = () => {
    if (dropdownOn) {
      handleCancel();
    } else {
      setPrevValue(priceRange);
      setDropdown(true);
    }
  };

  return (
    <DropdownButton
      {...{
        label: '비용',
        width: '300px',
        dropdownOn,
        value:
          priceRange[0] === 0 && priceRange[1] === 1000
            ? '전체'
            : `${priceRange[0]} ~ ${priceRange[1]}만원${
                priceRange[1] === 1000 ? '+' : ''
              }`,
        onClick: handleDropdown,
        blurEvent: handleCancel,
      }}
    >
      <div css={slider}>
        <Slider
          defaultValue={priceRange as [number, number]}
          onAfterChange={(v) => setPriceRange(v)}
          range
          marks={{
            0: {
              style: { marginTop: '5px', fontSize: '12px' },
              label: '무료',
            },
            1000: {
              style: { marginTop: '5px', fontSize: '12px' },
              label: '1000+',
            },
          }}
          step={100}
          min={0}
          max={1000}
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
    </DropdownButton>
  );
}

const slider = css`
  margin: 25px 25px;
`;

const bottomBar = css`
  height: 40px;
  border-top: 1px solid ${palette.opBlack2};
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
