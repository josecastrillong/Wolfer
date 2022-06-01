import Navbar from '../../components/Navbar/Navbar';
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
            <h2>Lorem ipsum, dolor sit amet consecteturcupiditate ipsum eum doloribus minus rem</h2>
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
