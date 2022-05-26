import { useState } from 'react';
import { ButtonGroup, Button } from '@mui/material';
import styles from './styles.module.css';

function CountButtons(props) {
  const [count, setCount] = useState(0);
  // eslint-disable-next-line react/prop-types
  const { blockUpdate } = props;

  const handleAdd = () => {
    setCount(count + 1);
    blockUpdate((count + 1) * 1000000);
  };
  const handleMinus = () => {
    setCount(count - 1);
    blockUpdate((count - 1) * 1000000);
  };

  const handleReset = () => {
    setCount(0);
    blockUpdate(0);
  };

  return (
    <div className={styles.counter_container}>
      <span className={styles.counter_text}>
        {' '}
        Bloques:
        {count}
      </span>
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <Button onClick={handleAdd}>+</Button>
        <Button onClick={handleMinus}>-</Button>
        <Button onClick={handleReset}>reset</Button>
      </ButtonGroup>
    </div>
  );
}

export default CountButtons;
