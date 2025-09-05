'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function SelectedCategoryHandler({
  onSelected,
}: {
  onSelected: (selected: string | null) => void;
}) {
  const searchParams = useSearchParams();
  const selected = searchParams.get('selected');

  useEffect(() => {
    onSelected(selected);
  }, [selected, onSelected]);

  return null;
}
