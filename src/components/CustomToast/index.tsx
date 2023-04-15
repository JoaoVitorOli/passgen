import * as Toast from '@radix-ui/react-toast';

import styles from './styles.module.scss';
import { Dispatch, SetStateAction } from 'react';

interface CustomToastProps {
  title: string;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>
}

export function CustomToast({
  title,
  open,
  setOpen
}: CustomToastProps) {
  return (
    <>
      <Toast.Root 
        className={styles.toastRoot} 
        open={open} 
        onOpenChange={setOpen}
        duration={3000}
      >
        <Toast.Title 
          className={styles.toastTitle}
        >
          {title}
        </Toast.Title>
        <Toast.Action 
          className={styles.toastAction} 
          asChild 
          altText="Close toast"
        >
          <button className={styles.okButton}>Ok</button>
        </Toast.Action>
      </Toast.Root>
      <Toast.Viewport className={styles.toastViewport} />
    </>
  )
}
