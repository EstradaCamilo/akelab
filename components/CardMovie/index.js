import styles from "./index.module.scss";
import PopularityMovie from "components/PopularityMovie";

export default function CardMovie({ movie, baseImg, getGender }) {
  return (
    <article className={`box ${styles.cardMovie}`}>
      <h2 className={styles.title}>{movie.title}</h2>
      <img className={styles.image} src={`${baseImg}${movie.backdrop_path}`} />
      <p className={styles.description}>{movie.overview}</p>
      <div className={styles.meta}>
        <div>
          <p>Título:</p>
          <p>{movie.title}</p>
        </div>
        <div>
          <p>Calificación:</p>
          <PopularityMovie popularity={movie.vote_average} />
        </div>
        <div>
          <p>Genero:</p>
          <ul className={styles.genders}>
            {movie.genre_ids.map((gender, key) => (
              <li key={key}>
                <span>{getGender(gender)}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p>Fecha de realización:</p>
          <p>{movie.release_date}</p>
        </div>
      </div>
    </article>
  );
}
