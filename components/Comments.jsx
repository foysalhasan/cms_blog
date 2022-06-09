import React, { useState, useEffect } from 'react'
import moment from 'moment'
import { getComments } from '../services'

function Comments({ slug }) {
  const [comments, setComments] = useState([])
  useEffect(() => {
    getComments(slug).then((result) => setComments(result))
  }, [slug])
  return (
    <div className="bg-white rounded-md shadow-md p-4 pb-8 mt-12">
      <h3 className="font-semibold text-xl mb-3">
        <span className="text-pink-700 font-bold">{comments.length}</span>{' '}
        Comments
      </h3>
      <div className="space-y-3">
        {comments.map((com) => (
          <div key={com.createdAt}>
            <p>
              <span className="text-indigo-700 font-semibold">{com.name}</span>{' '}
              on
              <span className="ml-1 text-sm font-semibold">
                {moment(com.createdAt).format('MMM DD, YYYY')}
              </span>
            </p>
            <p className="whitespace-pre-line capitalize"> - {com.comment}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Comments
