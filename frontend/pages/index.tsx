import Head from "next/head"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>FormalSwap - Oxford Formal Dinner Exchange</title>
        <meta name="description" content="Connect with Oxford students to swap formal dinner attendance" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Welcome to FormalSwap</h1>
        <p className="text-xl text-center mb-8">
          Connect with Oxford students to swap formal dinner attendance between colleges.
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/signup" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Sign Up
          </Link>
          <Link href="/login" className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
            Log In
          </Link>
        </div>
      </main>
    </div>
  )
}

