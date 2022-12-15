import Head from 'next/head'
import { useEffect } from 'react';
import { GeneratedPassword } from '../components/GeneratedPassword';
import { PasswordConfig } from '../components/PasswordConfig';

import styles from '../styles/home.module.scss';

export default function Home() {
  useEffect(() => {
    async function doFetch() {
      const response = await fetch('https://dev-essential.pecege.com/wp-json/api/devs', {
        method: 'get'
      });

      if (response.ok) {
        console.log('success:');
        console.log(response);
      } else {
        console.log('error:');
        console.log(response);
      }
    }


    doFetch();
  });

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
