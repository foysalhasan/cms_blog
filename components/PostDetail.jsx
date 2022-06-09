import React from 'react'
import moment from 'moment'
import { RichText } from '@graphcms/rich-text-react-renderer'

function PostDetail({ post }) {
  return (
    <div className="bg-white pb-4 rounded-md shadow-md overflow-hidden mb-20">
      <img
        src={post.featuredImage.url}
        alt={post.title}
        className="object-cover w-full block h-60 lg:h-[400px] object-top border-b-4 border-pink-500 mb-4"
      />
      <div className="flex items-center gap-3 justify-start px-4 mb-4">
        <div className="flex gap-3 items-center">
          <img
            src={post.author.photo.url}
            alt={post.title}
            className="object-cover w-8 h-8 lg:w-12 lg:h-12 rounded-full ring-2 ring-pink-300 ring-offset-2"
          />
          <span className="text-sm lg:text-lg font-semibold text-gray-500">
            {post.author.name}
          </span>
        </div>
        <div className="flex gap-3 items-center">
          <img
            src="/calender.png"
            alt="Date:"
            className="object-cover w-8 h-8 lg:w-12 lg:h-12 rounded-full "
          />
          <span className="text-sm lg:text-lg font-semibold text-gray-500">
            {moment(post.createdAt).format('MMM DD, YYYY')}
          </span>
        </div>
      </div>
      <div className="space-y-3 px-4">
        <h2 className="text-gray-700 font-semibold text-2xl">{post.title}</h2>
        <div className="post">
          <RichText content={post.content.raw} />
        </div>
      </div>
    </div>
  )
}

export default PostDetail
