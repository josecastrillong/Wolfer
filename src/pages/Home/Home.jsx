import Navbar from '../../components/Navbar/Navbar';
import CardAction from '../../components/CardAction/CardAction';
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
      <footer>
        <p>Footer</p>
      </footer>
    </div>
  );
}

export default Home;
