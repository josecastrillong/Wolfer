import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function InvestButton() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/login');
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClick}>Invertir</Button>
    </div>
  );
}

export default InvestButton;
