import { ClipboardCopyIcon } from '@radix-ui/react-icons';

import { Container } from "../Container";
import { ToolTip } from '../ToolTip';

import styles from './styles.module.scss';
import { useRef, useState } from 'react';
import { CustomToast } from '../CustomToast';

export function GeneratedPassword() {
  const [isToastOpen, setIsToastOpen] = useState(false);
  const passwordRef = useRef<HTMLParagraphElement>(null);

  function handleCopyPassword() {
    navigator.clipboard.writeText(passwordRef.current?.innerText || '');

    setIsToastOpen(true);
  }

  return (
    <section className={styles.generatedPassword}>
      <Container>
        <div className={styles.content}>
          <p className={styles.password} ref={passwordRef}>24389fc93ffe42224389fc93ffe422</p>

          <CustomToast 
            open={isToastOpen} 
            title='Copied to clipboard!' 
            setOpen={setIsToastOpen}
          />

          <ToolTip content={'Copy password'}>
            <button 
              type='button' 
              aria-label='Copy to clipboard' 
              className={styles.buttonCopy}
              onClick={handleCopyPassword}
            >
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