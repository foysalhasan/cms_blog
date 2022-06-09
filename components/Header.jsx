import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { GoZap } from 'react-icons/go'
import { getCategories } from '../services'

function Header() {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    getCategories().then((result) => setCategories(result))
  }, [])
  return (
    <header className="container mb-3 md:mb-8 px-4 lg:px-10 mx-auto py-4">
      <div className="flex justify-between items-center border-b-2 border-blue-200 py-4">
        <div className="">
          <Link href="/">
            <div className="text-3xl text-white font-bold cursor-pointer items-center flex space-x-[1px]">
              <GoZap className="animate-pulse" />
              <span className="">CMS BLOG</span>
            </div>
          </Link>
        </div>
        <div className="flex-1 hidden md:flex justify-end items-center gap-x-5">
          {categories.map((cat) => (
            <Link key={cat.slug} href={`/category/${cat.slug}`}>
              <span className="text-xl text-white uppercase font-semibold cursor-pointer hover:text-yellow-400 transition">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Header
