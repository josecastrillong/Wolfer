import { Button } from '@mui/material';

function UploadButton() {
  return (
    <Button variant="contained" color="primary" component="label">
      cargar archivo
      <input type="file" hidden />
    </Button>
  );
}

export default UploadButton;
