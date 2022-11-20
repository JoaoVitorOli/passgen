import { Container } from "../Container";
import { LengthSlider } from "./LengthSlider";

import styles from './styles.module.scss';

export function PasswordConfig() {
  return (
    <section className={styles.passwordConfig}>
      <Container>
        <div className={styles.content}>
          <LengthSlider />
          
        </div>
      </Container>
    </section>
  )
}