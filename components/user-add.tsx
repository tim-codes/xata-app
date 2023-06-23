'use client';

import { userCreateLoading } from '@/lib/atoms';
import { useRouter } from 'next/navigation';
import { startTransition, useCallback, useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import styles from '../app/page.module.css';

export function AddUser() {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const router = useRouter();


  const setCreateLoading = useSetRecoilState(userCreateLoading);
  useEffect(() => setCreateLoading(loading), [loading]);

  const saveUser = useCallback(async () => {
    if (loading) return;
    setLoading(true);
    setName('');
    await fetch('/api', {
      method: 'POST',
      body: JSON.stringify({ name }),
    })
      .then((res) => res.json())
      .then(console.debug)
      .then(() => {
        startTransition(() => {
          // Refresh the current route and fetch new data from the server without
          // losing client-side browser or React state.
          router.refresh();
        });
      })
      .finally(() => setLoading(false));
  }, [name]);

  return (
    <form
      className={styles.addUser}
      onSubmit={(e) => {
        saveUser().catch(console.error);
        e.preventDefault();
      }}
    >
      <label htmlFor="name-input">New User</label>
      <input name="name-input" type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button type="submit">
        <div>Save</div>
      </button>
    </form>
  );
}
