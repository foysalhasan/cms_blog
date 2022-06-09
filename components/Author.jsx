import React from 'react'

function Author({ author }) {
  return (
    <div className="p-8 pt-16 w-full lg:w-3/4 mx-auto bg-black/25 rounded relative text-center space-y-3">
      <img
        src={author.photo.url}
        className="w-24 h-24 ring-white absolute -top-12 left-0 right-0 mx-auto ring-2 ring-offset-2 rounded-full object-cover"
      />
      <h4 className="font-bold text-xl uppercase text-yellow-400">
        {author.name}
      </h4>
      <p className="text-white">{author.bio}</p>
    </div>
  )
}

export default Author
