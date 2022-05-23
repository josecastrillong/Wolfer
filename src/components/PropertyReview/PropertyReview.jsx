// import { useEffect, useState } from 'react';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import EngineeringIcon from '@mui/icons-material/Engineering';
import DescriptionIcon from '@mui/icons-material/Description';
import { Progress } from 'react-sweet-progress';
import TokenIcon from '@mui/icons-material/Token';
import styles from './styles.module.css';

function PropertyReview() {
  return (
    <section className={styles.PropertyReview}>
      <div className={styles.tittle_section}>
        <h2 className={styles.porperty_name}>
          Casa Aguas Claras
        </h2>
        <div className={styles.qualifications}>
          <h3>Medellín - Colombia</h3>
        </div>
        <div className={styles.investors}>
          120 inversionistas
        </div>
        <hr />
        <div>
          <div className={styles.info_section}>
            <ArchitectureIcon />
            <div className={styles.text_info}>
              <h3>Diseño</h3>
              <p>Rogelio Salmona</p>
            </div>
          </div>
          <div className={styles.info_section}>
            <EngineeringIcon />
            <div className={styles.text_info}>
              <h3>Constructor</h3>
              <p>Alguna constructora</p>
            </div>
          </div>
          <div className={styles.info_section}>
            <DescriptionIcon />
            <div className={styles.text_info}>
              <h3>Espacios</h3>
              <p>Rogelio Salmona</p>
            </div>
          </div>
          <div className={styles.info_section}>
            <TokenIcon />
            <div className={styles.text_info}>
              <h3>Bloques comprados</h3>
              <Progress percent={50} />
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}

export default PropertyReview;
