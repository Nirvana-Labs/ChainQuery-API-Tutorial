import Head from 'next/head'
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Nirvana Labs - ChainQuery API Tutorial</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          ChainQuery API Tutorial
        </h1>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <Link href="/rest-api" className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600">
            <h3 className="text-2xl font-bold">REST API &rarr;</h3>
            <p className="mt-4 text-xl">Uses the ChainQuery REST API.</p>
          </Link>

          <Link href="/socket-io-api" className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600">
            <h3 className="text-2xl font-bold">Socket.io events &rarr;</h3>
            <p className="mt-4 text-xl">Uses the ChainQuery LIVE API.</p>
          </Link>

        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" width={72} height={16} />
        </a>
      </footer>
    </div>
  )
}