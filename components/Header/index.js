import styles from "./index.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const { pathname } = useRouter();
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.options}>
          <li>
            <Link href="/">
              <a className={pathname === "/" ? styles.active : ""}>Index</a>
            </Link>
          </li>
          <li>
            <Link href="/fibonacci">
              <a className={pathname === "/fibonacci" ? styles.active : ""}>
                Fibonacci
              </a>
            </Link>
          </li>
          <li>
            <Link href="/multiples">
              <a className={pathname === "/multiples" ? styles.active : ""}>
                Multiples
              </a>
            </Link>
          </li>
          <li>
            <Link href="/movies">
              <a className={pathname === "/movies" ? styles.active : ""}>
                Movies
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
