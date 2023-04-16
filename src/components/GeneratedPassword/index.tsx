import { useEffect, useRef, useState } from 'react';
import { ClipboardCopyIcon } from '@radix-ui/react-icons';

import { Container } from "../Container";
import { ToolTip } from '../ToolTip';
import { CustomToast } from '../CustomToast';
import { usePassStoreState, usePassActions } from '../../stores/hooks/password';
import { usePassConfigStoreState } from '../../stores/hooks/passwordConfig';

import styles from './styles.module.scss';

export function GeneratedPassword() {
  const [isToastOpen, setIsToastOpen] = useState(false);
  const passwordRef = useRef<HTMLParagraphElement>(null);
  const generatedPassword = usePassStoreState(state => state.password);
  const generateNewPass = usePassActions(action => action.generateNewPass);
  const passConfig = usePassConfigStoreState(state => state);

  function handleCopyPassword() {
    navigator.clipboard.writeText(passwordRef.current?.innerText || '');

    setIsToastOpen(true);
  }

  useEffect(() => {
    const { 
      charLength,
      lowercase,
      numbers,
      symbols,
      upercase
    } = passConfig;

    generateNewPass({
      charLength,
      lowercase,
      numbers,
      symbols,
      upercase
    });
  }, []);

  return (
    <section className={styles.generatedPassword}>
      <Container>
        <div className={styles.content}>
          <p className={styles.password} ref={passwordRef}>{generatedPassword}</p>

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