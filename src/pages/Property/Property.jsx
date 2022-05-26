import PropertyPhotos from '../../components/PropertyPhotos/PropertyPhotos';
import PropertyReview from '../../components/PropertyReview/PropertyReview';
import InvestCard from '../../components/InvestCard/InvestCard';
import styles from './styles.module.css';

function Property() {
  return (
    <div className={styles.property}>
      <div className={styles.property_photos}>
        <PropertyPhotos />
      </div>
      <div className={styles.section_wraper}>
        <div className={styles.property_review}>
          <PropertyReview />
        </div>
        <div className={styles.property_invest}>
          <InvestCard />
        </div>
      </div>
    </div>
  );
}

export default Property;
