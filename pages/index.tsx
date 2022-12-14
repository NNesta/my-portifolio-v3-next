import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Ngabonziza profile</title>
        <meta name="description" content="Ngabonziza Nestor portifolio" />
        <link rel="logo" href="/logo.png" />
      </Head>

      <main className="text-red-500">
        <h1>Hello This is Ngabonziza Profile</h1>
        <Link href="/blog"> Browse the blogs</Link>
      </main>

      <footer className="">

      </footer>
    </div>
  )
}

export default Home
