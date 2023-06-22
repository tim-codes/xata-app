'use client';

import { FC } from 'react';
import { useRecoilValue } from 'recoil';
import { userCreateLoading } from '@/lib/atoms';

export const WithUserLoading: FC<{ children?: React.ReactNode }> = ({ children }) => {
  const loading = useRecoilValue(userCreateLoading);
  if (!loading) return null;
  return children;
};
