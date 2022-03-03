import styles from "./index.module.scss";
import Head from "next/head";
import MainLayout from "components/MainLayout";
import { useForm } from "../../hooks/useForm";
import { useState } from "react";

export default function Fibonacci() {
  const initialValues = { number: 0 };
  const [fibonacci, setFibonacci] = useState([]);

  const onSubmit = () => {
    if (values.number < 1) {
      alert("error");
    } else {
      setFibonacci(generateFibonacci(values.number));
    }
  };

  const { values, handleInputChange, handleSubmit } = useForm(
    initialValues,
    onSubmit
  );

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
        <form className={`box`} onSubmit={handleSubmit}>
          <div className={`customInput`}>
            <label htmlFor="number">Number</label>
            <input
              id="number"
              name="number"
              type="number"
              min="1"
              placeholder="Number"
              onChange={handleInputChange}
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
