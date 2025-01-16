import React from 'react'

export default function Footer() {

  const versiondate = "1.11 Jan 16 2025"

  return (
    <footer className='p-2 border-t-2 border-gray-200'>
      <p className='text-center'>Boxy generator - All right reserved © : {versiondate}</p>
    </footer>
  )
}
