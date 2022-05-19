import ArchitectureIcon from '@mui/icons-material/Architecture';
import styles from './styles.module.css';

function PropertyReview() {
  return (
    <section className={styles.PropertyReview}>
      <div className={styles.tittle_section}>
        <h2 className={styles.porperty_name}>
          Casa Aguas Claras
        </h2>
        <div className={styles.qualifications}>
          5 estrellas
        </div>
        <div className={styles.investors}>
          120
        </div>
        <hr />
        <div>
          <div className={styles.icon}>
            {ArchitectureIcon}
          </div>
        </div>
      </div>
    </section>

  );
}

export default PropertyReview;
