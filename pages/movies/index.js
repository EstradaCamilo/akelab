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
import { useForm } from "hooks/useForm";

export default function Movies({
  initialImageUrl,
  initialGenders,
  initialMovies,
}) {
  const [imageUrl, setImageUrl] = useState(initialImageUrl);
  const [genders, setGenders] = useState(initialGenders);
  const [movies, setMovies] = useState(initialMovies);

  const getNameGender = (id) => {
    return genders.find((gender) => gender.id == id).name;
  };

  const search = { keyword: "" };

  const { values: valuesSearch, handleInputChange: handleInputChangeSearch } =
    useForm(search);

  useEffect(() => {
    const { keyword } = valuesSearch;
    if (keyword != "") {
      setMovies(
        initialMovies.filter(({ title }) =>
          title.toLowerCase().includes(keyword.toLowerCase())
        )
      );
    } else {
      setMovies(initialMovies);
    }
  }, [initialMovies, valuesSearch]);

  return (
    <MainLayout>
      <Head>
        <title>Películas</title>
      </Head>
      <div className={styles.movies}>
        <h1>Películas</h1>
        <div className={styles.options}>
          <form className={styles.search} autoComplete="off">
            <input
              id="keyword"
              name="keyword"
              type="search"
              onChange={handleInputChangeSearch}
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
          {movies.map((movie) => (
            <CardMovie
              key={movie.id}
              movie={movie}
              imageUrl={imageUrl}
              getNameGender={getNameGender}
            />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}

export async function getServerSideProps(context) {
  const url = `http://${context.req.headers.host}/api/movies?akelab=123456789`;
  const response = await fetch(url);
  const data = await response.json();
  const { imagesUrl, genders, movies } = data;
  return {
    props: {
      initialImageUrl: imagesUrl ?? "",
      initialGenders: genders ?? [],
      initialMovies: movies ?? [],
    },
  };
}
