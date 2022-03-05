import styles from "./index.module.scss";
import { useState, useEffect } from "react";
import { StarIcon as StarIconSolid } from "@heroicons/react/solid";
import { StarIcon as StarIconOutline } from "@heroicons/react/outline";

export default function PopularityMovie({ popularity }) {
  const [calification, setCalification] = useState([]);

  useEffect(() => {
    let calificationArray = new Array(5);
    for (let i = 0; i < 5; i++) {
      let value = (i + 1) * 2;
      calificationArray[i] = value < popularity ? true : false;
    }
    setCalification(calificationArray);
  }, []);

  return (
    <div className={styles.popularityMovie}>
      <ul>
        {calification.map((c, key) => (
          <li key={key}>
            {c ? (
              <>
                <StarIconSolid className={`${styles.icon} ${styles.accent}`} />
              </>
            ) : (
              <>
                <StarIconOutline
                  className={`${styles.icon} ${styles.default}`}
                />
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
