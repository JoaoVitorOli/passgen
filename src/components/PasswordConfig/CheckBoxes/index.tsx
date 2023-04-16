import { CheckBox } from './CheckBox';

import styles from './styles.module.scss';
import { useStoreActions, useStoreState } from '../../../stores/hooks';
import { PasswordConfigProps } from '../../../stores/model';

export default function CheckBoxes() {
  const updateLowercase = useStoreActions(actions => actions.updateLowercase);
  const updateUpercase = useStoreActions(actions => actions.updateUpercase);
  const updateNumbers = useStoreActions(actions => actions.updateNumbers);
  const updateSymbols = useStoreActions(actions => actions.updateSymbols);
  const upercase = useStoreState(state => state.upercase);
  const lowercase = useStoreState(state => state.lowercase);
  const numbers = useStoreState(state => state.numbers);
  const symbols = useStoreState(state => state.symbols);

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