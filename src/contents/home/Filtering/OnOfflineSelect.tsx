import DropdownButton from '@components/dropdown/Button';
import { css } from '@emotion/react';
import { palette } from '@styles/palette';
import { Button } from 'antd';
import { MouseEvent, useState } from 'react';
import useIsMobile from 'src/hooks/useIsMobile';
import SelectDrawer, { SelectDrawerProps } from './SelectDrawer';

export default function OnOfflineSelect() {
  const options = ['전체', '오프라인', '온라인', '혼합'];
  const [value, setValue] = useState(options[0]);
  const [dropdownOn, setDropdown] = useState(false);
  const isMobile = useIsMobile();

  const handleDropdown = () => {
    setDropdown(!dropdownOn);
  };

  const selectMenu = (e: MouseEvent<HTMLElement, globalThis.MouseEvent>) => {
    setValue(e.currentTarget.innerText);
    handleDropdown();
  };

  const selectDrawerProps: Omit<SelectDrawerProps, 'children'> = {
    title: '온/오프라인',
    open: dropdownOn,
    onClose: handleDropdown,
  };
  return (
    <>
      <DropdownButton
        {...{
          label: '온/오프라인',
          value,
          width: '100px',
          left: '75px',
          showBottomBar: false,
          dropdownOn,
          onClick: handleDropdown,
          blurEvent: handleDropdown,
        }}
      >
        <div css={select}>
          {options.map((el, i) => (
            <Button
              value={el}
              style={{ width: '100%' }}
              type="text"
              key={i}
              onClick={(e) => selectMenu(e)}
            >
              {el}
            </Button>
          ))}
        </div>
      </DropdownButton>
      {isMobile && (
        <SelectDrawer {...selectDrawerProps}>
          {options.map((option, i) => (
            <button key={i} css={button} onClick={(e) => selectMenu(e)}>
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
