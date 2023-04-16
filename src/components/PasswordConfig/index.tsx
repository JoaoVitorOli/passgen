import dynamic from "next/dynamic";
import { Container } from "../Container";
import { ButtonGenerate } from "./ButtonGenerate";
import CheckBoxes from "./CheckBoxes";
import LengthSlider from "./LengthSlider";
// const LengthSlider = dynamic(() => import('./LengthSlider'), { ssr: false });
// const CheckBoxes = dynamic(() => import('./CheckBoxes'), { ssr: false });

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