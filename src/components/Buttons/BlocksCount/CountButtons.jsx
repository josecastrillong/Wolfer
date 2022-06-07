import { useRecoilState } from 'recoil';
import { ButtonGroup, Button } from '@mui/material';
import block from '../../../recoil/atom';
import styles from './styles.module.css';

function CountButtons() {
  const [blocks, setBlocks] = useRecoilState(block);

  const handleAdd = () => {
    setBlocks((blocks + 1));
  };
  const handleMinus = () => {
    setBlocks((blocks - 1));
  };

  const handleReset = () => {
    setBlocks(0);
  };

  return (
    <div className={styles.counter_container}>
      <span className={styles.counter_text}>
        {' '}
        Bloques:
        {blocks}
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
