import { createStore, persist } from "easy-peasy";
import { PasswordConfigStoreProps } from "./model";
import { passwordConfig } from "./passwordConfig";

export const passwordConfigStore = createStore<PasswordConfigStoreProps>(
  passwordConfig
);