import { AddUser, UserRow, UsersList, UsersListData, WithUserLoading, XataliciousTItle } from '@/components';
import { Suspense } from 'react';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <XataliciousTItle />
      <UsersList className={styles.usersList}>
        <Suspense>
          <UsersListData />
        </Suspense>
        <WithUserLoading>
          <UserRow user={{ id: 'loading' }} />
        </WithUserLoading>
      </UsersList>
      <AddUser />
    </main>
  );
}
