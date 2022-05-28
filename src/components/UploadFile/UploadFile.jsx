/* eslint-disable react/jsx-no-bind */
import InputLabel from '@mui/material/InputLabel';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';
import { useState } from 'react';
import { Input, Button } from '@mui/material';
import { storage } from '../../utils/ConfigFirebase';
import styles from './styles.module.css';

function UploadFile() {
  const [file, setFile] = useState(null);

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
