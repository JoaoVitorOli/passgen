import { action } from "easy-peasy";

import { PasswordConfigStoreProps } from './model';

export const passwordConfig: PasswordConfigStoreProps = {
  charLength: 15,
  lowercase: true,
  numbers: true,
  symbols: true,
  upercase: true,

  updateCharLength: action((state, payload) => {
    state.charLength = payload;
  }),
  updateLowercase: action((state, payload) => {
    state.lowercase = payload;
  }),
  updateSymbols: action((state, payload) => {
    state.symbols = payload;
  }),
  updateUpercase: action((state, payload) => {
    state.upercase = payload;
  }),
  updateNumbers: action((state, payload) => {
    state.numbers = payload;
  }),
};