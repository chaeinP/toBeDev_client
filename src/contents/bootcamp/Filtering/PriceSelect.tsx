import DropdownButton from '@components/dropdown/Button';
import { css } from '@emotion/react';
import { Slider } from 'antd';
import { useState } from 'react';

export default function PriceSelect() {
  const [priceRange, setPriceRange] = useState<number[]>([0, 1000]);

  const initializePriceRange = (value: string) => {
    if (value === '전체') setPriceRange([0, 1000]);
    else {
      setPriceRange(value.split('~').map((num) => parseInt(num, 10)));
    }
  };

  return (
    <DropdownButton
      {...{
        label: '비용',
        width: '300px',
        value:
          priceRange[0] === 0 && priceRange[1] === 1000
            ? '전체'
            : `${priceRange[0]} ~ ${priceRange[1]}만원${
                priceRange[1] === 1000 ? '+' : ''
              }`,
        cancelHandler: initializePriceRange,
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
    </DropdownButton>
  );
}

const slider = css`
  margin: 25px 25px;
`;
