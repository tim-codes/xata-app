import { FC } from 'react';

export const UsersList: FC<{ children?: React.ReactNode }> = ({ children }) => (
  <div className="users-list">{children}</div>
);
