import { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { usePassActions } from '../../../stores/hooks/password';
import { usePassConfigStoreState } from '../../../stores/hooks/passwordConfig';

export function ButtonGenerate() {
  const generateNewPass = usePassActions(action => action.generateNewPass);
  const passConfig = usePassConfigStoreState(state => state);
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

    const { 
      charLength,
      lowercase,
      numbers,
      symbols,
      upercase
    } = passConfig;

    generateNewPass({
      charLength,
      lowercase,
      numbers,
      symbols,
      upercase
    });
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
