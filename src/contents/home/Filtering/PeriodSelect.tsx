import DropdownButton from '@components/dropdown/Button';
import { css } from '@emotion/react';
import { palette } from '@styles/palette';
import { Button, Slider } from 'antd';
import { useState } from 'react';

export default function PeriodSelect() {
  const [period, setPeriod] = useState<number[]>([0, 12]);
  const [prevValue, setPrevValue] = useState<number[] | null>(null);
  const [dropdownOn, setDropdown] = useState(false);

  const handleCancel = () => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    setPeriod(prevValue!);
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
      setPrevValue(period);
      setDropdown(true);
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
        dropdownOn,
        onClick: handleDropdown,
        blurEvent: handleCancel,
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
      <div css={bottomBar}>
        <Button type="text" onClick={handleCancel}>
          취소
        </Button>
        <Button type="link" onClick={handleConfirm}>
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
