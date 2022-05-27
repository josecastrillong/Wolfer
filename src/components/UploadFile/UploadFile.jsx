import InputLabel from '@mui/material/InputLabel';
import { useState } from 'react';
import { Input } from '@mui/material';
import SubmitButton from '../Buttons/Submit/SubmitButton';
import styles from './styles.module.css';
import 

function UploadFile() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  async function handleUpload() {
    try {
      if (!file) {
        throw new Error('No file selected');
      }else
      
    } catch (error) {
      
    }

  return (
    <div className={styles.container}>
      <InputLabel>Documento de identificación</InputLabel>
      <Input
        type="file"
        name="file"
        id="file"
        accept="image/*"
        multiple={false}
        onChange={handleFileChange}
      />
      <SubmitButton onClick={handleUpload} />
    </div>

  );
}

export default UploadFile;
