/* eslint-disable max-len */
import Navbar from '../../components/Navbar/Navbar';
import CardAction from '../../components/CardAction/CardAction';
import Footer from '../../components/Footer/Footer';
import styles from './styles.module.css';

function Home() {
  return (
    <div>
      <header className={styles.nav}>
        <Navbar />
      </header>
      <main>
        <section>
          <div className={styles.first_section}>
            <p className={styles.text}>Tú oportunidad para invertir en propiedad raíz comprando bloques desde 2.000.000 de pesos</p>
          </div>
        </section>
        <section>
          <div>
            <CardAction />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
