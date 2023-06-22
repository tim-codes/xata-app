import { UserRow } from '@/components';
import { getXataClient } from '@/lib/xata';

const xata = getXataClient();

export async function UsersListData() {
  const users = await xata.db.users.select(['id', 'name']).getAll();
  return users.map((user) => <UserRow key={user.id} user={user} />);
}
