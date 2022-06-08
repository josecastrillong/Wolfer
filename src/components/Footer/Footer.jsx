import { ref, getDownloadURL } from 'firebase/storage';
import { useState, useEffect } from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { storage } from '../../utils/ConfigFirebase';
import styles from './styles.module.css';

function Footer() {
  const pathReference = ref(storage, 'logos/logo_oscuro.png');
  const [url, setUrl] = useState('');

  const getUrl = async () => {
    try {
      const fetchUrl = await getDownloadURL(pathReference);
      setUrl(fetchUrl);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    getUrl();
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.logo_container}>
        <img className={styles.logo} src={url} alt="logo" />
      </div>
      <div className={styles.copyright}>
        <p>
          <strong>Wolfer</strong>
          {' '}
          by Jose Miguel Castrillón G
        </p>
      </div>
      <div className={styles.social}>
        <LinkedInIcon />
        <InstagramIcon />
        <TwitterIcon />
      </div>
    </footer>
  );
}

export default Footer;
