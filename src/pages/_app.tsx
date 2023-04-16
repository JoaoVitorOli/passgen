import type { AppProps } from 'next/app'
import * as Toast from '@radix-ui/react-toast';
import { StoreProvider } from 'easy-peasy';

import { passwordConfigStore } from '../stores';
import { Source_Code_Pro } from '@next/font/google';

import '../styles/globals.scss'

const sourceCodePro = Source_Code_Pro({
  weight: ['600', '400']
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={sourceCodePro.className}>
      <StoreProvider store={passwordConfigStore}>
        <Toast.Provider swipeDirection="right" >
          <Component {...pageProps} />
        </Toast.Provider>
      </StoreProvider>
    </main>
  )
}
