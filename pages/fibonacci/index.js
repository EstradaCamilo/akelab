import styles from "./index.module.scss";
import Head from "next/head";
import MainLayout from "components/MainLayout";
import { useForm } from "hooks/useForm";
import { useState } from "react";

export default function Fibonacci() {
  const initialValues = { number: 0 };
  const [fibonacci, setFibonacci] = useState([]);

  const onSubmit = (values) => {
    if (values.number < 1) {
      alert("El número debe ser mayoy o igual a 1");
    } else {
      setFibonacci(generateFibonacci(values.number));
    }
  };

  const {
    handleInputChange: handleInputChangeFibonacci,
    handleSubmit: handleSubmitFibonacci,
  } = useForm(initialValues, onSubmit);

  const generateFibonacci = (number) => {
    let initialFibonacci = [1, 1];
    if (number == 1) {
      return [1];
    } else if (number > 2) {
      for (let i = 2; i < number; i++) {
        initialFibonacci[i] = initialFibonacci[i - 2] + initialFibonacci[i - 1];
      }
    }
    return initialFibonacci;
  };

  return (
    <MainLayout>
      <Head>
        <title>Fibonacci</title>
      </Head>
      <div className={styles.fibonacci}>
        <h1>Fibonacci</h1>
        <form className={`box`} onSubmit={handleSubmitFibonacci}>
          <div className={`customInput`}>
            <label htmlFor="number">Número</label>
            <input
              id="number"
              name="number"
              type="number"
              min="1"
              placeholder="Ingrese un número"
              onChange={handleInputChangeFibonacci}
            />
          </div>
          <button type="submit" className="btn btn-indigo">
            Generar
          </button>
        </form>
        {fibonacci.length > 0 ? (
          <>
            <div className={`box ${styles.numbers}`}>
              {fibonacci.map((number, i) => (
                <div key={i}>{number}</div>
              ))}
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </MainLayout>
  );
}
