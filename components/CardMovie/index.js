import styles from "./index.module.scss";

export default function CardMovie({ movie }) {
  //console.log(movie);
  return (
    <article className={`box ${styles.cardMovie}`}>
      <h2 className={styles.title}>{movie.title}</h2>
      <p className={styles.description}>{movie.overview}</p>
      <div className={styles.meta}>
        <div>
          <p>Título:</p>
          <p>{movie.title}</p>
        </div>
        <div>
          <p>Calificación:</p>
          <p>{movie.vote_average}</p>
        </div>
        <div>
          <p>Genero:</p>
          <p></p>
        </div>
        <div>
          <p>Fecha de realización:</p>
          <p>{movie.release_date}</p>
        </div>
      </div>
    </article>
  );
}
