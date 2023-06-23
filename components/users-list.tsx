import { FC } from 'react';

export const UsersList: FC<{ children?: React.ReactNode; className?: string }> = ({ children, className }) => (
  <div className={className}>
    <section>{children}</section>
  </div>
);
