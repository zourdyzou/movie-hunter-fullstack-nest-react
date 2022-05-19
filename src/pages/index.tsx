import Head from 'next/head';

import { Layout } from '@/components/Layout';

export default function Home() {
  return (
    <div>
      <Head>
        <title>TypeScript starter for Next.js</title>
        <meta
          name="description"
          content="TypeScript starter for Next.js that includes all you need to build amazing apps"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <h1 className="text-5xl font-bold underline">Hello world!</h1>
      </Layout>
    </div>
  );
}
