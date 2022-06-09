import React from 'react'
import Link from 'next/link'
import moment from 'moment'

const PostCard = ({ post }) => {
  return (
    <div className="bg-white pb-8  rounded-md space-y-4">
      <div className="relative overflow-hidden pb-80">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="object-cover object-top rounded-t-md absolute shadow-sm h-80 w-full"
        />
      </div>
      <h3 className="text-center text-lg lg:text-2xl font-semibold text-gray-900 transition duration-200 hover:text-pink-600 cursor-pointer">
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h3>
      <div className="flex items-center justify-center gap-3">
        <div className="flex items-center justify-center gap-2">
          <img
            src={post.author.photo.url}
            alt=""
            className="w-8 lg:w-12 h-8 lg:h-12 rounded-full object-cover"
          />
          <span className="capitalize text-gray-700 font-semibold">
            {post.author.name}
          </span>
        </div>
        <div className="flex justify-center items-center gap-1">
          <img
            src="/calender.png"
            alt="calender"
            className="w-8 lg:w-12 h-8 lg:h-12 rounded-full object-cover"
          />
          <span className="font-semibold text-gray-700">
            {moment(post.createdAt).format('MMM DD, YYYY')}
          </span>
        </div>
      </div>
      <p className="text-xl text-gray-700 text-center">{post.excerpt}</p>
      <div className="text-center">
        <Link href={`/post/${post.slug}`}>
          <span className="bg-pink-600 text-white inline-block px-8 font-semibold rounded-full cursor-pointer py-3 transition duration-300 transform hover:-translate-y-1 mt-2">
            Continue Reading
          </span>
        </Link>
      </div>
    </div>
  )
}

export default PostCard
