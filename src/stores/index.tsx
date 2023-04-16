import { createContextStore } from "easy-peasy";
import { passwordConfig } from "./passwordConfig";
import { password } from "./password";

export const PasswordConfigStores = createContextStore(
  passwordConfig,
);

export const PasswordStores = createContextStore(
  password,
);
