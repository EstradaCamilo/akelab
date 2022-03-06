import styles from "./index.module.scss";
import Head from "next/head";
import { useEffect, useState } from "react";
import MainLayout from "components/MainLayout";
import CardMovie from "components/CardMovie";
import { Popover } from "@headlessui/react";
import {
  FilterIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/outline";

export default function Multiples() {
  const [movies, setMovies] = useState([]);
  const [genders, setGenders] = useState([]);
  const [baseImg, setBaseImg] = useState("");
  const [keyword, setKeyword] = useState("");

  const [moviesFiltered, setMoviesFiltered] = useState([]);

  useEffect(() => {
    fetch(`${window.location.origin}/api/movies?akelab=123456789`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.movies) {
          setMovies(data.movies.results);
          setMoviesFiltered(data.movies.results);
          setGenders(data.movies.genres);
          setBaseImg(data.movies.images_url);
        } else {
          alert("ERROR: " + data.msg);
        }
      });
  }, []);

  useEffect(() => {
    if (keyword == "") {
      setMoviesFiltered(movies);
    } else {
      setMoviesFiltered(
        movies.filter(({ title }) =>
          title.toLowerCase().includes(keyword.trim().toLowerCase())
        )
      );
    }
  }, [keyword, movies]);

  const getGender = (id) => {
    if (genders.length > 0) {
      return genders.find((gender) => gender.id == id).name;
    }
    return "";
  };

  return (
    <MainLayout>
      <Head>
        <title>Películas</title>
      </Head>
      <div className={styles.movies}>
        <h1>Películas</h1>
        <div className={styles.options}>
          <form className={styles.search}>
            <input
              type="search"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
          </form>
          <div className={styles.filters}>
            <Popover className={styles.genders}>
              {({ open }) => (
                <>
                  {/* <div className={`backdrop ${!open ? "hidden" : ""}`}></div> */}
                  <Popover.Button className={styles.button}>
                    <span>Filtros</span>
                    <FilterIcon className={styles.icon} />
                  </Popover.Button>
                  <Popover.Panel className={styles.panel}>
                    <div>
                      <div>
                        <h2>Generos</h2>
                        <div>
                          {genders.map((gender) => (
                            <div
                              className="flex items-center gap-2"
                              key={gender.id}
                            >
                              <input
                                type="checkbox"
                                id={gender.id}
                                name={gender.id}
                              />
                              <label htmlFor={gender.id}>{gender.name}</label>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Popover.Panel>
                </>
              )}
            </Popover>
            <Popover className={styles.order}>
              {({ open }) => (
                <>
                  {/* <div className={`backdrop ${!open ? "hidden" : ""}`}></div> */}
                  <Popover.Button className={styles.button}>
                    <span>Ordenar</span>
                    {open ? (
                      <>
                        <ChevronUpIcon className={styles.icon} />
                      </>
                    ) : (
                      <>
                        <ChevronDownIcon className={styles.icon} />
                      </>
                    )}
                  </Popover.Button>
                  <Popover.Panel className={styles.panel}>
                    <div>
                      <div>
                        <h2>Fecha</h2>
                        <div>
                          <button>Nuevas - Antiguas</button>
                          <button>Antiguas - Nuevas</button>
                        </div>
                        <h2>Calificación</h2>
                        <div>
                          <button>0 - 10 Puntos</button>
                          <button>10 - 0 Puntos</button>
                        </div>
                      </div>
                    </div>
                  </Popover.Panel>
                </>
              )}
            </Popover>
          </div>
        </div>
        <div className={styles.collectionMovies}>
          {moviesFiltered.map((movie) => (
            <CardMovie
              key={movie.id}
              movie={movie}
              baseImg={baseImg}
              getGender={getGender}
            />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
