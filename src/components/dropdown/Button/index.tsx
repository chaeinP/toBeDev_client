import { CaretDownOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';
import { palette } from '@styles/palette';
import { Button, Slider } from 'antd';
import React, { useState } from 'react';

interface DropdownButtonProps {
  label: string;
  width: string;
  onClick: () => void;
  left?: string;
  value?: string;
  dropdownOn: boolean;
  children: React.ReactNode;
}
export default function DropdownButton({
  label,
  width,
  onClick,
  left = '0px',
  value = '전체',
  dropdownOn = false,
  children,
}: DropdownButtonProps) {
  // const onOpen = () => {
  //   setPrevValue(value);
  //   setDropdownOn(true);
  // };

  // const onCancel = () => {
  //   if (cancelHandler) cancelHandler(prevValue);
  //   setDropdownOn(false);
  // };

  // const onConfirm = () => {
  //   setDropdownOn(false);
  // };

  return (
    <div css={wrapper}>
      <button css={buttonWrapper} onClick={onClick}>
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
      {dropdownOn && <div css={dropdown(width, left)}>{children}</div>}
    </div>
  );
}
const wrapper = css`
  position: relative;
`;

const buttonWrapper = css`
  display: flex;
  border-radius: 5px;
  border: 1px solid ${palette.opBlack2};
  background-color: ${palette.white};
  position: relative;
  margin-bottom: 5px;
  font-size: 13px;

  .label {
    border-right: 1px solid ${palette.opBlack2};
    padding: 7px;
    font-weight: 600;
  }
  .value {
    display: flex;
    padding: 7px;
    div {
      margin-left: 10px;
    }
  }
`;

const dropdown = (width: string, left: string) => css`
  position: absolute;
  border-radius: 10px;
  width: ${width || '300px'};
  border: 1px solid ${palette.opBlack2};
  background-color: ${palette.white};
  left: ${left || '0px'};
`;
