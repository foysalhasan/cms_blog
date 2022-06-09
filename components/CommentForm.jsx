import React, { useState, useEffect, useRef } from 'react'
import { submitComment } from '../services'

function CommentForm({ slug }) {
  const [error, setError] = useState(false)
  //   const [localStorage, setLocalStorage] = useState(null)
  const [successMsg, setSuccessMsg] = useState(false)
  const commentEl = useRef()
  const nameEl = useRef()
  const emailEl = useRef()
  const storeEl = useRef()

  useEffect(() => {
    nameEl.current.value = window.localStorage.getItem('name')
    emailEl.current.value = window.localStorage.getItem('email')
  }, [])

  const handleComment = () => {
    setError(false)
    const { value: comment } = commentEl.current
    const { value: name } = nameEl.current
    const { value: email } = emailEl.current
    const { checked: storeData } = storeEl.current

    if (!comment || !name || !email) {
      setError(true)
      return
    }
    const commentObj = { name, email, comment, slug }
    if (storeData) {
      localStorage.setItem('name', name)
      localStorage.setItem('email', email)
    } else {
      localStorage.removeItem('name', name)
      localStorage.removeItem('email', email)
    }
    submitComment(commentObj).then((res) => {
      setSuccessMsg(true)
      setTimeout(() => {
        setSuccessMsg(false)
      }, 3000)
      commentEl.current.value = ''
    })
  }

  return (
    <div className="mt-12 bg-white rounded shadow-md p-8 ">
      <h3 className="font-semibold text-gray-900 text-xl border-b-2 border-gray-200 pb-2">
        Leave a Reply
      </h3>
      <div className="grid grid-cols-1 my-4">
        <textarea
          ref={commentEl}
          name="comment"
          placeholder="Comment"
          className="outline-none placeholder:text-gray-500 p-6 bg-gray-200 rounded-md focus:ring-2 focus:ring-gray-300"
        ></textarea>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-3">
        <input
          ref={nameEl}
          type="text"
          name="name"
          placeholder="Name"
          className="outline-none placeholder:text-gray-500 px-4 py-3 bg-gray-200 rounded-md focus:ring-2 focus:ring-gray-300"
        />
        <input
          ref={emailEl}
          type="email"
          name="email"
          placeholder="Email"
          className="outline-none placeholder:text-gray-500 px-4 py-3 bg-gray-200 rounded-md focus:ring-2 focus:ring-gray-300"
        />
        {error && (
          <p className=" text-xs tracking-wide font-semibold text-red-600">
            All Fields Are Required !
          </p>
        )}
      </div>
      <div className="grid grid-cols-1">
        <div className="">
          <input
            type="checkbox"
            name="storeEl"
            value="true"
            ref={storeEl}
            id="checkbox"
          />
          <label
            className="text-sm cursor-pointer ml-1 font-semibold text-gray-500"
            htmlFor="checkbox"
          >
            Save My Email and Name for Next Comment
          </label>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <button
          className="rounded-full inline-block mt-2 px-5 py-3 bg-pink-700 text-white font-semibold text-sm transition duration-300 hover:bg-indigo-700"
          type="button"
          onClick={handleComment}
        >
          Post Comment
        </button>
        {successMsg && (
          <p className="text-xs tracking-wide font-semibold text-green-600">
            Comment Posted Successfully !
          </p>
        )}
      </div>
    </div>
  )
}

export default CommentForm
