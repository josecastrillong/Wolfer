// import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import styles from './styles.module.css';

function Navbar() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const menuClass = open ? styles.linksOpen : styles.linksClose;

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        Logo
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
