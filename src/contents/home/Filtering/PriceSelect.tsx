import DropdownButton from '@components/dropdown/Button';
import { css } from '@emotion/react';
import { palette } from '@styles/palette';
import { Button, Drawer } from 'antd';
import { useState } from 'react';
import useIsMobile from 'src/hooks/useIsMobile';
import SelectDrawer, { SelectDrawerProps } from './SelectDrawer';
import SelectSlider, { SelectSliderProps } from './SelectSlider';

export default function PriceSelect() {
  const [priceRange, setPriceRange] = useState<number[]>([0, 1000]);
  const [prevValue, setPrevValue] = useState<number[] | null>(null);
  const [dropdownOn, setDropdown] = useState(false);
  const isMobile = useIsMobile();

  const handleRange = (v: [number, number]) => {
    setPriceRange(v);
  };

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

  const selectSliderProps: SelectSliderProps = {
    value: priceRange,
    handleValue: handleRange,
    minLabel: '무료',
    maxLabel: '1000+',
    min: 0,
    max: 1000,
    step: 100,
    handleCancel,
    handleConfirm,
  };

  const selectDrawerProps: Omit<SelectDrawerProps, 'children'> = {
    title: '비용 선택',
    open: dropdownOn,
    onClose: handleCancel,
  };

  return (
    <>
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
