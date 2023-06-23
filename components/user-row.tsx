import { FC } from 'react';
import styles from '../app/page.module.css';

export const UserRow: FC<{ user: { id: string; name?: string | null } }> = ({ user: { id, name } }) => (
  <div className={styles.userRow}>
    {name}
    {id === 'loading' && <div className="loading" />}
  </div>
);
