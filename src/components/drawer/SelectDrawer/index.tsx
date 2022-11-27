import { css } from '@emotion/react';
import { Drawer } from 'antd';

export interface SelectDrawerProps {
  title: string;
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function SelectDrawer({
  title,
  open,
  onClose,
  children,
}: SelectDrawerProps) {
  return (
    <Drawer
      css={drawer}
      title={title}
      placement="bottom"
      open={open}
      onClose={onClose}
      height={'270px'}
    >
      {children}
    </Drawer>
  );
}

const drawer = css`
  .ant-drawer-wrapper-body {
    border-radius: 20px 20px 0 0;
  }
  .ant-drawer-title {
    position: absolute;
    top: 9%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
