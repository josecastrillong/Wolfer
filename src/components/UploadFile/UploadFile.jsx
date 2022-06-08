/* eslint-disable react/jsx-no-bind */
import InputLabel from '@mui/material/InputLabel';
import { ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';
import { useState } from 'react';
import { Input, Button } from '@mui/material';
import { useRecoilState } from 'recoil';
import { storage } from '../../utils/ConfigFirebase';
import styles from './styles.module.css';
import { docUpload } from '../../recoil/atom';

function UploadFile() {
  const [file, setFile] = useState(null);
  const [, setUploaded] = useRecoilState(docUpload);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  console.log(file);

  const handleUpload = async () => {
    try {
      if (!file) {
        throw new Error('No se ha seleccionado ningun archivo');
      }
      const fileName = `${document + v4()}`;
      const fileRef = ref(storage, `imagesId/${fileName}`);
      await uploadBytes(fileRef, file);
      setUploaded(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.container}>
      <InputLabel>Documento de identificación</InputLabel>
      <Input
        type="file"
        name="file"
        id="file"
        multiple={false}
        onChange={handleFileChange}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleUpload}
      >
        Enviar
      </Button>
    </div>

  );
}

export default UploadFile;
