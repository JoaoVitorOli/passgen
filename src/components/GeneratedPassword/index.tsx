import { ClipboardCopyIcon } from '@radix-ui/react-icons';

import { Container } from "../Container";
import { ToolTip } from '../ToolTip';

import styles from './styles.module.scss';

export function GeneratedPassword() {
  return (
    <section className={styles.generatedPassword}>
      <Container>
        <div className={styles.content}>
          <p>24389fc93ffe4</p>

          <ToolTip content={'Copy password'}>
            <button type='button' className={styles.buttonCopy}>
              <ClipboardCopyIcon 
                width={28} 
                height={28} 
                color={'rgb(0, 105, 255)'}
              />
            </button>
          </ToolTip>
        </div>
      </Container>
    </section>
  )
}