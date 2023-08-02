import { Layout } from '@/components/layout';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>MeuGuru | Registro</title>
        <link rel="icon" href="/images/meu-guru-icon.ico" />
        <meta
          property="og:description"
          name="og:description"
          content="Aprenda suas matérias por meio da resolução de seus exercícios. Encontre tutores especializados, 24 horas por dia e 7 dias por semana."
        ></meta>
        <meta
          property="description"
          name="description"
          content="Aprenda suas matérias por meio da resolução de seus exercícios. Encontre tutores especializados, 24 horas por dia e 7 dias por semana."
        ></meta>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
