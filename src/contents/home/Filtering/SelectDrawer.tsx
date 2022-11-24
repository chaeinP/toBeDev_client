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
