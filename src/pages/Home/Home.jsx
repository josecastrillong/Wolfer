import Navbar from '../../components/Navbar/Navbar';
import styles from './styles.module.css';

function Home() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <section>
          <div className={styles.first_section}>
            <h1>Welcome to the Home Page</h1>
          </div>
        </section>
        <section>
          <div>
            <h2>What is this?</h2>
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
