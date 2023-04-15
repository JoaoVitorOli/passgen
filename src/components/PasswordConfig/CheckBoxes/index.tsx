import { CheckBox } from './CheckBox';

import styles from './styles.module.scss';

export function CheckBoxes() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <CheckBox id='upercase-letter' /> 
        <label htmlFor="upercase-letter">Include Upercase Letters</label>
      </div>

      <div className={styles.item}>
        <CheckBox id='lowercase-letter' /> 
        <label htmlFor="lowercase-letter">Include Lowercase Letters</label>
      </div>

      <div className={styles.item}>
        <CheckBox id='numbers' /> 
        <label htmlFor="numbers">Include Numbers</label>
      </div>

      <div className={styles.item}>
        <CheckBox id='symbols' /> 
        <label htmlFor="symbols">Include Symbols</label>
      </div>
    </div>
  );  
}