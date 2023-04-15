import * as Toast from '@radix-ui/react-toast';

import { Source_Code_Pro } from '@next/font/google';

import type { AppProps } from 'next/app'

import '../styles/globals.scss'

const sourceCodePro = Source_Code_Pro({
  weight: ['600', '400']
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={sourceCodePro.className}>
      <Toast.Provider swipeDirection="right" >
        <Component {...pageProps} />
      </Toast.Provider>
    </main>
  )
}
