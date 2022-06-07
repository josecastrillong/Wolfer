import { useRecoilValue } from 'recoil';
import Contract from '../../components/Contract/ContractPDF';
import { docUpload } from '../../recoil/atom';
import UploadFile from '../../components/UploadFile/UploadFile';
import PayPalButton from '../../components/Payment/Payment';
import styles from './styles.module.css';

function ContractPage() {
  const uploadState = useRecoilValue(docUpload);
  console.log(uploadState);

  return (
    <div className={styles.container}>
      <div className={styles.contract}>
        <Contract />
      </div>
      <div className={styles.uploadID}>
        <UploadFile />
      </div>
      <div className={styles.paypal}>
        {uploadState ? <PayPalButton /> : null}
      </div>
    </div>
  );
}

export default ContractPage;
