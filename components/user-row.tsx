import { FC } from 'react';

export const UserRow: FC<{ user: { id: string; name?: string | null } }> = ({ user: { id, name } }) => (
  <div className="user" key={id}>
    {name}
    {id === 'loading' && <div className="loading" />}
  </div>
);
