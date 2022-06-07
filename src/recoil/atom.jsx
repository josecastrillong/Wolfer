import { atom } from 'recoil';

const block = atom({
  key: 'blockState',
  default: 0,
});

export default block;
