import Contract from '../../components/Contract/ContractPDF';
import UploadFile from '../../components/UploadFile/UploadFile';
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
    </div>
  );
}

export default ContractPage;
