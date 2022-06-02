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
            <h1>Hola Mundo</h1>
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
