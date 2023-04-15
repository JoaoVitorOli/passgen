import { useEffect, useState } from 'react';
import styles from './styles.module.scss';

export function ButtonGenerate() {
  const [isGenerated, setIsGenerated] = useState(false);

  useEffect(() => {
    if (isGenerated) {
      let timeout = setTimeout(() => {
        setIsGenerated(false);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [isGenerated]);

  function handleGenerate() {
    setIsGenerated(true);
  }


  return (
    <button
      type="button"
      onClick={handleGenerate}
      className={styles.button}
      aria-label="Generate Password"
      data-is-generated={String(isGenerated)}
    >
      {isGenerated ? (
        "Password generated!"        
        ) : (
        "Generate"
      )}
    </button>
  );
}
