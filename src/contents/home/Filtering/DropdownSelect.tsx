import SelectDrawer, {
  SelectDrawerProps,
} from '@components/drawer/SelectDrawer';
import DropdownButton from '@components/dropdown/Button';
import { css } from '@emotion/react';
import { Button } from 'antd';
import { MouseEvent } from 'react';
import useIsMobile from 'src/hooks/useIsMobile';

export interface DropdownSelectProps {
  label: string;
  options: string[];
  dropdownOn: boolean;
  handleDropdown: () => void;
  handleCancel: () => void;
  handleSelect: (e: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void;
  value: string | undefined;
  width?: string;
  left?: string;
}

export default function DropdownSelect({
  label,
  value,
  options,
  dropdownOn,
  handleDropdown,
  handleCancel,
  handleSelect,
  width = '120px',
  left = '0px',
}: DropdownSelectProps) {
  const isMobile = useIsMobile();

  const selectDrawerProps: Omit<SelectDrawerProps, 'children'> = {
    title: label,
    open: dropdownOn,
    onClose: handleCancel,
  };

  return (
    <>
      <DropdownButton
        {...{
          label,
          value,
          width,
          left,
          dropdownOn,
          onMouseDown: handleDropdown,
          blurEvent: handleCancel,
        }}
      >
        <div css={select}>
          {options.map((el, i) => (
            <Button
              value={el}
              style={{ width: '100%' }}
              type="text"
              key={i}
              onMouseDown={(e) => handleSelect(e)}
            >
              {el}
            </Button>
          ))}
        </div>
      </DropdownButton>
      {isMobile && (
        <SelectDrawer {...selectDrawerProps}>
          {options.map((option, i) => (
            <button
              key={i}
              css={button}
              onMouseDown={(e) => {
                handleSelect(e);
              }}
            >
              {option}
            </button>
          ))}
        </SelectDrawer>
      )}
    </>
  );
}

const select = css`
  padding: 10px;
`;

const button = css`
  display: block;
  background-color: white;
  color: black;
  border-style: none;
  width: 100%;
  height: 40px;
  font-size: 16px;
`;
