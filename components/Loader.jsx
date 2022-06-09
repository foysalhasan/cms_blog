import React from 'react'
import { BiLoader } from 'react-icons/bi'

function Loader() {
  return (
    <div className="flex items-center justify-center">
      <BiLoader className="animate-spin text-5xl text-white" />
    </div>
  )
}

export default Loader
