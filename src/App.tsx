import styles from "./App.module.css";
import { Footer } from "./components/Footer/footer";
import { Logo } from "./components/Logo/logo";

function App() {
  return (
    <div className={styles.app}>
      <Logo />
      <main className={styles.content} />
      <Footer />
    </div>
  );
}

export default App;
