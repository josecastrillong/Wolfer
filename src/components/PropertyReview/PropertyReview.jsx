import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import EngineeringIcon from '@mui/icons-material/Engineering';
import DescriptionIcon from '@mui/icons-material/Description';
import { Progress } from 'react-sweet-progress';
import TokenIcon from '@mui/icons-material/Token';
import { db } from '../../utils/ConfigFirebase';
import styles from './styles.module.css';

function PropertyReview() {
  const [property, setProperty] = useState([]);

  async function getDataCollection() {
    const properties = collection(db, 'property');
    const propertySnapshot = await getDocs(properties);
    const propertyData = propertySnapshot.docs.map((doc) => doc.data());
    return propertyData;
  }

  useEffect(() => {
    getDataCollection().then((propertyData) => {
      setProperty(propertyData);
    });
  }, []);

  return (
    <section className={styles.PropertyReview}>
      <div className={styles.tittle_section}>
        <h2 className={styles.porperty_name}>
          {property.length > 0 && property[0].nombre}
        </h2>
        <div className={styles.qualifications}>
          <h3>
            {property.length > 0 && property[0].ciudad}
            {' '}
            -
            {' '}
            {property.length > 0 && property[0].pais}
          </h3>
        </div>
        <div className={styles.investors}>
          {property.length > 0 && property[0].inversionistas}
        </div>
        <hr />
        <div>
          <div className={styles.info_section}>
            <ArchitectureIcon />
            <div className={styles.text_info}>
              <h3>Diseño</h3>
              <p>{property.length > 0 && property[0].diseño}</p>
            </div>
          </div>
          <div className={styles.info_section}>
            <EngineeringIcon />
            <div className={styles.text_info}>
              <h3>Constructor</h3>
              <p>
                {property.length > 0 && property[0].constructor}
              </p>
            </div>
          </div>
          <div className={styles.info_section}>
            <DescriptionIcon />
            <div className={styles.text_info}>
              <h3>Espacios</h3>
              <p>
                {property.length > 0 && property[0].espacios}
              </p>
            </div>
          </div>
          <div className={styles.info_section}>
            <TokenIcon />
            <div className={styles.text_info}>
              <h3>Bloques comprados</h3>
              <Progress
                percent={property.length > 0 && property[0].bloques_comprados}
              />
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}

export default PropertyReview;
