import DropdownButton from '@components/dropdown/Button';
import { css } from '@emotion/react';
import { palette } from '@styles/palette';
import { useState } from 'react';
import useIsMobile from 'src/hooks/useIsMobile';
import SelectDrawer, { SelectDrawerProps } from './SelectDrawer';
import SelectSlider, { SelectSliderProps } from './SelectSlider';

export default function PeriodSelect() {
  const [period, setPeriod] = useState<number[]>([0, 12]);
  const [prevValue, setPrevValue] = useState<number[] | null>(null);
  const [dropdownOn, setDropdown] = useState(false);
  const isMobile = useIsMobile();

  const handlePeriod = (v: [number, number]) => {
    setPeriod(v);
  };

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

  const selectSliderProps: SelectSliderProps = {
    value: period,
    handleValue: handlePeriod,
    minLabel: '0',
    maxLabel: '12+',
    min: 0,
    max: 12,
    step: 1,
    handleCancel,
    handleConfirm,
  };

  const selectDrawerProps: Omit<SelectDrawerProps, 'children'> = {
    title: '기간 선택',
    open: dropdownOn,
    onClose: handleCancel,
  };

  return (
    <>
      <DropdownButton
        {...{
          label: '기간',
          width: '300px',
          value:
            period[0] === 0 && period[1] === 12
              ? '전체'
              : `${period[0]} ~ ${period[1]}개월${
                  period[1] === 1000 ? '+' : ''
                }`,
          dropdownOn,
          onClick: handleDropdown,
          blurEvent: handleCancel,
        }}
      >
        <SelectSlider {...selectSliderProps} />
      </DropdownButton>
      {isMobile && (
        <SelectDrawer {...selectDrawerProps}>
          <SelectSlider {...selectSliderProps} />
          <div css={drawerButton}>
            <button onClick={handleConfirm}>확인</button>
          </div>
        </SelectDrawer>
      )}
    </>
  );
}

const drawerButton = css`
  margin: 60px 10px 0;
  button {
    width: 100%;
    padding: 10px;
    border-radius: 15px;
    color: ${palette.white};
    background-color: ${palette.skyblue3};
  }
`;
