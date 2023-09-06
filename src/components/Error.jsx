import React from 'react'

export default function Error({ children }) {
  return (
    <p className={`p-1 mt-1 rounded text-center text-1xl font-bold mb-4 text-white bg-red-700 hover:bg-red-900 uppercase`}>
      {children}
    </p>
  )
}
