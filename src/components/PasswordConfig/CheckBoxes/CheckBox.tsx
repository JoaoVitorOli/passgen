import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';

import styles from './styles.module.scss';

interface CheckBoxProps {
  id: string;
  checked: Checkbox.CheckedState;
  onCheckedChange: (checked: Checkbox.CheckedState) => void
  ariaLabel: string;
}

export function CheckBox({
  id,
  checked,
  onCheckedChange,
  ariaLabel
}: CheckBoxProps) {
  return (
    <Checkbox.Root 
      className={styles.checkboxRoot} 
      checked={checked}
      onCheckedChange={onCheckedChange}
      id={id}
      aria-label={ariaLabel}
    >
      <Checkbox.Indicator className={styles.checkboxIndicator}>
        <CheckIcon width={20} height={20} />
      </Checkbox.Indicator>
    </Checkbox.Root>
  );  
}