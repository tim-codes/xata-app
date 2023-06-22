import { atom } from 'recoil';

export const userCreateLoading = atom<boolean>({
  key: 'users.createLoading',
  default: false,
});
