import { CaretDownOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';
import { palette } from '@styles/palette';
import { Button, Slider } from 'antd';
import { useState } from 'react';

interface DropdownButtonProps {
  label: string;
  width: string;
  value?: string;
  cancelHandler?: (value: string) => void;
  children: JSX.Element;
}
export default function DropdownButton({
  label,
  width,
  value = '전체',
  cancelHandler,
  children,
}: DropdownButtonProps) {
  const [dropdownOn, setDropdownOn] = useState(false);
  const [prevValue, setPrevValue] = useState('');

  const onOpen = () => {
    setPrevValue(value);
    setDropdownOn(true);
  };

  const onCancel = () => {
    if (cancelHandler) cancelHandler(prevValue);
    setDropdownOn(false);
  };

  const onConfirm = () => {
    setDropdownOn(false);
  };

  return (
    <div css={wrapper}>
      <button
        css={buttonWrapper}
        onClick={() => {
          if (dropdownOn) onCancel();
          else onOpen();
        }}
      >
        <div className="label">
          <p>{label}</p>
        </div>
        <div className="value">
          <p>{value}</p>
          <div>
            <CaretDownOutlined />
          </div>
        </div>
      </button>
      {dropdownOn && (
        <div css={dropdown(width)}>
          {children}
          <div css={bottomBar}>
            <Button type="text" onClick={onCancel}>
              취소
            </Button>
            <Button type="link" onClick={onConfirm}>
              확인
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
const wrapper = css`
  position: relative;
`;

const buttonWrapper = css`
  display: flex;
  border-radius: 10px;
  border: 1px solid ${palette.opBlack2};
  background-color: ${palette.white};
  position: relative;
  margin-bottom: 5px;
  font-size: 16px;

  .label {
    border-right: 1px solid ${palette.opBlack2};
    padding: 10px;
    font-weight: 600;
  }
  .value {
    display: flex;
    padding: 10px;
    div {
      margin-left: 10px;
    }
  }
`;

const dropdown = (width: string) => css`
  position: absolute;
  border-radius: 10px;
  width: ${width || '300px'};
  border: 1px solid ${palette.opBlack2};
  background-color: ${palette.white};
`;

const bottomBar = css`
  height: 40px;
  border-top: 1px solid ${palette.opBlack2};
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
