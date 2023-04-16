import { action } from "easy-peasy";

import { PasswordStoreProps } from "./models/password";
import { generatePassword } from "../utils/generatePassword";

export const password: PasswordStoreProps = {
  password: '',

  generateNewPass: action((state, payload) => {
    const randomPassword = generatePassword(payload);

    state.password = randomPassword;
  }),
};