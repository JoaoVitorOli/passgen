import { CheckedState } from '@radix-ui/react-checkbox';
import { Action } from 'easy-peasy';

export type PasswordConfigProps = {
  charLength: number,
  upercase: CheckedState,
  lowercase: CheckedState,
  numbers: CheckedState,
  symbols: CheckedState
}

export interface PasswordConfigStoreProps {
  charLength: number,
  upercase: CheckedState,
  lowercase: CheckedState,
  numbers: CheckedState,
  symbols: CheckedState
  updateCharLength: Action<PasswordConfigStoreProps, number>;
  updateUpercase: Action<PasswordConfigStoreProps, CheckedState>;
  updateLowercase: Action<PasswordConfigStoreProps, CheckedState>;
  updateNumbers: Action<PasswordConfigStoreProps, CheckedState>;
  updateSymbols: Action<PasswordConfigStoreProps, CheckedState>;
}