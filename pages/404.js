import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

function NotFound() {
  return (
    <div className="flex items-center flex-col gap-y-4 justify-center relative">
      <Head>
        <title>404 | Not Found</title>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <img
        src="/notfound.webp"
        alt="NOT FOUND !"
        className="w-full lg:w-[600px] rounded object-cover"
      />
      <Link href="/">
        <button
          type="button"
          className="bg-white shadow-sm text-pink-700 px-5 py-2 rounded font-semibold text-lg outline-none transition hover:border-pink-600 hover:bg-pink-600 hover:text-white"
        >
          GO BACK
        </button>
      </Link>
    </div>
  )
}

export default NotFound
