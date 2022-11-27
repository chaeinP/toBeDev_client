import { CaretDownOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';
import { MOBILE_MEDIA } from '@styles/media';
import { palette } from '@styles/palette';
import { Button, Slider } from 'antd';
import React, { useState } from 'react';

interface DropdownButtonProps {
  label: string;
  width: string;
  onMouseDown: () => void;
  left?: string;
  value?: string;
  blurEvent?: () => void;
  dropdownOn: boolean;
  children: React.ReactNode;
}
export default function DropdownButton({
  label,
  width,
  onMouseDown,
  left = '0px',
  value = '전체',
  dropdownOn = false,
  blurEvent,
  children,
}: DropdownButtonProps) {
  return (
    <div
      css={wrapper}
      onBlur={() => {
        blurEvent && blurEvent();
      }}
    >
      <button css={labelWrapper} onMouseDown={onMouseDown}>
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

      <div
        css={dropdown(dropdownOn, width, left)}
        onMouseDown={(e) => e.preventDefault()}
      >
        {children}
      </div>
    </div>
  );
}
const wrapper = css`
  position: relative;
`;

const labelWrapper = css`
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
	left: ${left || '0px'};
  z-index: 999;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;`
    : `display: none;`}

  ${MOBILE_MEDIA} {
    display: none;
  }
`;
