import DropdownButton from '@components/dropdown/Button';
import { css } from '@emotion/react';
import { palette } from '@styles/palette';
import { Button } from 'antd';
import { MouseEvent, useState } from 'react';

export default function OnOfflineSelect() {
  const options = ['전체', '오프라인', '온라인', '혼합'];
  const [value, setValue] = useState(options[0]);
  const [dropdownOn, setDropdown] = useState(false);

  const handleDropdown = () => {
    setDropdown(!dropdownOn);
  };

  const selectMenu = (e: MouseEvent<HTMLElement, globalThis.MouseEvent>) => {
    setValue(e.currentTarget.innerText);
    handleDropdown();
  };

  return (
    <DropdownButton
      {...{
        label: '온/오프라인',
        value,
        width: '100px',
        left: '95px',
        showBottomBar: false,
        dropdownOn,
        onClick: handleDropdown,
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
  );
}

const select = css`
  padding: 10px;
`;
