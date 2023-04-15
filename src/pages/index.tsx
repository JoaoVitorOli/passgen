import Head from 'next/head'
import { GeneratedPassword } from '../components/GeneratedPassword';
import { PasswordConfig } from '../components/PasswordConfig';

import styles from '../styles/home.module.scss';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Password Generator</title>
        <meta name="description" content="A Password Generator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.homeTitle}>Password Generator</h1>

        <GeneratedPassword />
        <PasswordConfig />
      </main>
    </div>
  )
}
