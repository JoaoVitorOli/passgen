import { Action } from 'easy-peasy';
import { PasswordConfigProps } from './passwordConfig';

export type PasswordProps = {
  password: string,
}

export interface PasswordStoreProps {
  password: string,
  generateNewPass: Action<PasswordStoreProps, PasswordConfigProps>;
}