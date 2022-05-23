import InvestButton from '../Buttons/Invest/Invest';
import CountButtons from '../Buttons/BlocksCount/CountButtons';
import styles from './styles.module.css';

function InvestCard() {
  return (
    <div>
      <div>
        <span>$1.000.000</span>
        <span>/ bloque</span>
      </div>
      <div>
        <CountButtons />
      </div>
      <div>
        <InvestButton />
      </div>
    </div>
  );
}

export default InvestCard;
