import { ref, getDownloadURL } from 'firebase/storage';
import { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { storage } from '../../utils/ConfigFirebase';
import styles from './styles.module.css';

function Navbar() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const menuClass = open ? styles.linksOpen : styles.linksClose;

  const pathReference = ref(storage, 'logos/logo_blanco.png');
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
    <nav className={styles.nav}>
      <div className={styles.logo_container}>
        <img className={styles.logo} src={url} alt="logo" />
      </div>
      <div className={styles.links}>
        <div
          onClick={handleOpen}
          onKeyPress={handleOpen}
          role="button"
          tabIndex="0"
          className={styles.menuButton}
        >
          <MenuIcon />
        </div>
        <div className={menuClass}>
          <div className={styles.link}>
            Sobre Wolfer
          </div>
          <div className={styles.link}>
            Contacto
          </div>
          <div className={styles.link}>
            Iniciar Sesión
          </div>
        </div>
      </div>
    </nav>

  );
}

export default Navbar;
