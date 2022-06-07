import { useRecoilValue } from 'recoil';
import InvestButton from '../Buttons/Invest/Invest';
// eslint-disable-next-line import/no-named-as-default
import CountButtons from '../Buttons/BlocksCount/CountButtons';
import block from '../../recoil/atom';
import styles from './styles.module.css';

function InvestCard() {
  const blocks = useRecoilValue(block);
  let number = blocks * 1000000;
  number = number.toLocaleString();

  return (
    <div className={styles.container}>
      <div className={styles.counter_buttons}>
        <CountButtons />
      </div>
      <div className={styles.invest_info}>
        <div className={styles.block_value}>
          <span className={styles.block_price}>Valor del bloque</span>
          <span className={styles.number}>$1.000.000 COP</span>
        </div>
        <div className={styles.block_value}>
          <span className={styles.block_price}>Valor total</span>
          <span className={styles.number}>
            $
            {number}
            {' '}
            COP
          </span>
        </div>
      </div>
      <div className={styles.invest_button}>
        <InvestButton />
      </div>
    </div>
  );
}

export default InvestCard;
