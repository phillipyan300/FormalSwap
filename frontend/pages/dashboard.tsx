import Head from "next/head"
import Link from "next/link"

export default function Dashboard() {
  // TODO: Fetch user's listings and notifications from the backend

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Dashboard - FormalSwap</title>
      </Head>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Your Listings</h2>
            {/* TODO: Display user's listings */}
            <p>No listings yet.</p>
            <Link
              href="/post-listing"
              className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Post a Listing
            </Link>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Notifications</h2>
            {/* TODO: Display user's notifications */}
            <p>No new notifications.</p>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Browse Listings</h2>
          <Link
            href="/browse-listings"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          >
            Browse Listings
          </Link>
        </div>
      </main>
    </div>
  )
}

