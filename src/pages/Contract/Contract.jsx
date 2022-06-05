import Contract from '../../components/Contract/ContractPDF';
import UploadFile from '../../components/UploadFile/UploadFile';
import PayPalButton from '../../components/Payment/Payment';
import styles from './styles.module.css';

function ContractPage() {
  return (
    <div className={styles.container}>
      <div className={styles.contract}>
        <Contract />
      </div>
      <div className={styles.uploadID}>
        <UploadFile />
      </div>
      <div className={styles.paypal}>
        <PayPalButton />
      </div>
    </div>
  );
}

export default ContractPage;
