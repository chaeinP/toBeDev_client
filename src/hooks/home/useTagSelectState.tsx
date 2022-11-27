import { useState } from 'react';

export default function useTagSelectState() {
  const [selectedTags, setSelectedTags] = useState<number[]>([]);

  const handleSelectTag = (i: number) => {
    if (selectedTags.includes(i)) {
      const filteredTags = selectedTags.filter((el) => el !== i);
      setSelectedTags(filteredTags);
    } else {
      setSelectedTags([...selectedTags, i]);
    }
  };

  return {
    selectedTags,
    handleSelectTag,
  };
}
