import styles from "./index.module.scss";
import Head from "next/head";
import MainLayout from "components/MainLayout";
import { useForm } from "hooks/useForm";
import { useState } from "react";

export default function Multiples() {
  const initialValues = { number: 0 };
  const [numbers, setNumbers] = useState([]);

  const onSubmit = () => {
    if (values.number < 1) {
      alert("El número debe ser mayoy o igual a 1");
    } else {
      setNumbers(generateNumbers(values.number));
    }
  };

  const { values, handleInputChange, handleSubmit } = useForm(
    initialValues,
    onSubmit
  );

  const generateNumbers = (number) => {
    const initialNumbers = new Array(parseInt(number));
    for (let i = 0; i < number; i++) {
      if ((i + 1) % 3 == 0 && (i + 1) % 5 == 0) {
        initialNumbers[i] = "akelab";
      } else if ((i + 1) % 3 == 0) {
        initialNumbers[i] = "ake";
      } else if ((i + 1) % 5 == 0) {
        initialNumbers[i] = "lab";
      } else {
        initialNumbers[i] = i + 1;
      }
    }
    return initialNumbers;
  };

  return (
    <MainLayout>
      <Head>
        <title>Múltiplos</title>
      </Head>
      <div className={styles.multiples}>
        <h1>Múltiplos</h1>
        <form className={`box`} onSubmit={handleSubmit}>
          <div className={`customInput`}>
            <label htmlFor="number">Número</label>
            <input
              id="number"
              name="number"
              type="number"
              min="1"
              placeholder="Ingrese un número"
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className="btn btn-indigo">
            Generar
          </button>
        </form>
        {numbers.length > 0 ? (
          <>
            <div className={`box ${styles.numbers}`}>
              {numbers.map((number, i) => (
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
