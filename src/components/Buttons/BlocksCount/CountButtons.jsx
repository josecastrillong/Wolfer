import { useState } from 'react';
import { ButtonGroup, Button } from '@mui/material';
import styles from './styles.module.css';

function CountButtons() {
  const [count, setCount] = useState(0);

  const handleAdd = () => (
    setCount(count + 1)
  );
  const handleMinus = () => (
    setCount(count - 1)
  );
  const handleReset = () => (
    setCount(0)
  );

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
