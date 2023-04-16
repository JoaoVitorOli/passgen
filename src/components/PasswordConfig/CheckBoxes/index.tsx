import { CheckBox } from './CheckBox';

import styles from './styles.module.scss';
import { usePassConfigActions, usePassConfigStoreState } from '../../../stores/hooks/passwordConfig';

export default function CheckBoxes() {
  const updateLowercase = usePassConfigActions(actions => actions.updateLowercase);
  const updateUpercase = usePassConfigActions(actions => actions.updateUpercase);
  const updateNumbers = usePassConfigActions(actions => actions.updateNumbers);
  const updateSymbols = usePassConfigActions(actions => actions.updateSymbols);
  const upercase = usePassConfigStoreState(state => state.upercase);
  const lowercase = usePassConfigStoreState(state => state.lowercase);
  const numbers = usePassConfigStoreState(state => state.numbers);
  const symbols = usePassConfigStoreState(state => state.symbols);

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <CheckBox 
          id='upercase-letter'
          checked={upercase}
          onCheckedChange={(checked) => updateUpercase(checked)}
        /> 
        <label htmlFor="upercase-letter">Include Upercase Letters</label>
      </div>

      <div className={styles.item}>
        <CheckBox
          id='lowercase-letter' 
          checked={lowercase}
          onCheckedChange={(checked) => updateLowercase(checked)}
        /> 
        <label htmlFor="lowercase-letter">Include Lowercase Letters</label>
      </div>

      <div className={styles.item}>
        <CheckBox 
          id='numbers'
          checked={numbers}
          onCheckedChange={(checked) => updateNumbers(checked)}
        /> 
        <label htmlFor="numbers">Include Numbers</label>
      </div>

      <div className={styles.item}>
        <CheckBox 
          id='symbols' 
          checked={symbols}
          onCheckedChange={(checked) => updateSymbols(checked)}
        /> 
        <label htmlFor="symbols">Include Symbols</label>
      </div>
    </div>
  );  
}