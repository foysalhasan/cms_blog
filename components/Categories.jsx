import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { getCategories } from '../services'

const Categories = () => {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    getCategories().then((result) => setCategories(result))
  }, [])
  return (
    <div className="bg-white p-8 rounded-md shadow-md">
      <h3 className="text-left lg:text-center mb-8 text-2xl font-semibold capitalize text-gray-700 pb-3 border-b-2 border-sky-100">
        Categories
      </h3>
      <div className="space-y-3">
        {categories.map((cat) => (
          <Link href={`/category/${cat.slug}`} key={cat.slug}>
            <span className="block capitalize transition hover:text-pink-600 cursor-pointer text-gray-700 text-lg font-semibold">
              {cat.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Categories
