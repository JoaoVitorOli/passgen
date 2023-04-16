import { createTypedHooks } from "easy-peasy";
import { PasswordConfigStoreProps } from "./model";

const { 
  useStoreActions, 
  useStoreState, 
} = createTypedHooks<PasswordConfigStoreProps>();

export {
  useStoreActions,
  useStoreState,
}