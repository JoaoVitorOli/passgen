import { Container } from "../Container";
import { ButtonGenerate } from "./ButtonGenerate";
import { CheckBoxes } from "./CheckBoxes";
import { LengthSlider } from "./LengthSlider";

import styles from './styles.module.scss';

export function PasswordConfig() {
  return (
    <section className={styles.passwordConfig}>
      <Container>
        <div className={styles.content}>
          <LengthSlider />
          
          <CheckBoxes />

          <ButtonGenerate />
        </div>
      </Container>
    </section>
  )
}