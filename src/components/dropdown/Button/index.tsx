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
  blurEvent?: () => void;
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
  blurEvent,
  children,
}: DropdownButtonProps) {
  return (
    <div
      css={wrapper}
      onBlur={(e) => {
        if (
          blurEvent &&
          e.relatedTarget?.className === 'css-7gawcy-DropdownButton'
        ) {
          blurEvent();
        }
      }}
    >
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
      <div css={dropdown(dropdownOn, width, left)}>{children}</div>
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

const dropdown = (dropdown: boolean, width: string, left: string) => css`
  ${dropdown
    ? `position: absolute;
  border-radius: 10px;
  width: ${width || '300px'};
  border: 1px solid ${palette.opBlack2};
  background-color: ${palette.white};
  left: ${left || '0px'};`
    : `display: none;`}
`;
