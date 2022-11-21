import DropdownButton from '@components/dropdown/Button';
import { css } from '@emotion/react';
import { Slider } from 'antd';
import { useState } from 'react';

export default function PeriodSelect() {
  const [period, setPeriod] = useState<number[]>([0, 12]);

  const initializePeriod = (value: string) => {
    if (value === '전체') setPeriod([0, 12]);
    else {
      setPeriod(value.split('~').map((num) => parseInt(num, 10)));
    }
  };

  return (
    <DropdownButton
      {...{
        label: '기간',
        width: '300px',
        value:
          period[0] === 0 && period[1] === 12
            ? '전체'
            : `${period[0]} ~ ${period[1]}개월${period[1] === 1000 ? '+' : ''}`,
        cancelHandler: initializePeriod,
      }}
    >
      <div css={slider}>
        <Slider
          defaultValue={period as [number, number]}
          onAfterChange={(v) => setPeriod(v)}
          range
          marks={{
            0: {
              style: { marginTop: '5px', fontSize: '12px' },
              label: '0',
            },
            12: {
              style: { marginTop: '5px', fontSize: '12px' },
              label: '12+',
            },
          }}
          step={1}
          min={0}
          max={12}
        />
      </div>
    </DropdownButton>
  );
}

const slider = css`
  margin: 25px 25px;
`;
