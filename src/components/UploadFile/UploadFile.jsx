import InputLabel from '@mui/material/InputLabel';
import { Input } from '@mui/material';
import SubmitButton from '../Buttons/Submit/SubmitButton';
import styles from './styles.module.css';

function UploadFile() {
  return (
    <div className={styles.container}>
      <InputLabel>Documento de identificación</InputLabel>
      <Input
        type="file"
        name="file"
        id="file"
        accept="image/*"
        multiple={false}
      />
      <SubmitButton />
    </div>

  );
}

export default UploadFile;
