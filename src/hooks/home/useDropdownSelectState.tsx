import { MouseEvent, useState } from 'react';

export interface useDropdownSelectStateProps {
  options: string[];
}

export default function useDropdownSelectState({
  options,
}: useDropdownSelectStateProps) {
  const [value, setValue] = useState(options[0]);
  const [dropdownOn, setDropdown] = useState(false);

  const handleCancel = () => {
    if (dropdownOn) {
      setDropdown(false);
    }
  };

  const handleDropdown = () => {
    setDropdown(!dropdownOn);
  };

  const handleSelect = (e: MouseEvent<HTMLElement, globalThis.MouseEvent>) => {
    setValue(e.currentTarget.innerText);
    setDropdown(false);
  };

  return {
    options,
    value,
    dropdownOn,
    handleDropdown,
    handleCancel,
    handleSelect,
  };
}
