// atoms.js
import { atom } from 'recoil';

export const authState = atom({
  key: 'authState',
  default: {
    isAuthenticated: false,
    token: null,
  },
});

export const userDetailsState = atom({
  key: 'userDetailsState',
  default: {
    id:'',
    username: '',
    email: '',
    address: '',
  },
});
