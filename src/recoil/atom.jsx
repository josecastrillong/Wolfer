import { atom } from 'recoil';

const block = atom({
  key: 'blockState',
  default: 0,
});

const docUpload = atom({
  key: 'docUploadState',
  default: false,
});

export { block, docUpload };
