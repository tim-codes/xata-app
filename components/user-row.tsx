import { FC } from 'react';
import styles from '../app/page.module.css';
import spinnerStyles from '../app/spinner.module.css';

export const UserRow: FC<{ user: { id: string; name?: string | null } }> = ({ user: { id, name } }) => (
  <div className={styles.userRow}>
    {name}
    {id === 'loading' && (
      <div className={spinnerStyles.spinnerWrapper}>
        <div className={spinnerStyles.ldsEllipsis}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    )}
  </div>
);
