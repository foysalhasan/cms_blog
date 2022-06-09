import React, { useState, useEffect } from 'react'
import moment from 'moment'
import Link from 'next/link'
import { getRecentPosts, getSimilarPosts } from '../services'

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([])

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setRelatedPosts(result)
      )
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result)
      })
    }
  }, [slug])

  return (
    <div className="bg-white p-8 rounded-md shadow-md">
      <h3 className="text-left lg:text-center mb-8 text-2xl font-semibold capitalize text-gray-700 pb-3 border-b-2 border-sky-100">
        {slug ? 'Related Post' : 'Recent Post'}
      </h3>
      <div className="space-y-4">
        {relatedPosts.map((post) => (
          <div className="flex items-center group gap-3" key={post.title}>
            <img
              src={post.featuredImage.url}
              alt={post.title}
              className="block group-hover:ring-pink-400 rounded-full w-16 h-16 object-cover ring-offset-2 ring-2 ring-pink-200 transition"
            />
            <div className="">
              <span className="font-semibold text-sm">
                {moment(post.createdAt).format('DD MMM YY')}
              </span>
              <Link href={`/post/${post.slug}`}>
                <h4 className="cursor-pointer text-lg transition hover:text-pink-600">
                  {post.title}
                </h4>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PostWidget
