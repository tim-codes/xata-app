'use client';

import React, { FC } from 'react';
import { RecoilRoot } from 'recoil';

const RecoilRootWrapper: FC<{ children?: React.ReactNode }> = ({ children }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default RecoilRootWrapper;
