'use client';

import { startTransition, useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';

export function AddUser() {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const router = useRouter();

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
      onSubmit={(e) => {
        saveUser().catch(console.error);
        e.preventDefault();
      }}
    >
      <label htmlFor="name-input">Enter Name</label>
      <input name="name-input" type="text" value={name} onChange={(e) => setName(e.target.value)} />
    </form>
  );
}
