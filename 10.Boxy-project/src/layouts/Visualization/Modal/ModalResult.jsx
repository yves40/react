import { useEffect } from 'react'
import getBoxShadowValue from '../../../utils/getBoxShadowValue'
import { useSelector } from 'react-redux'

export default function ModalResult({closeModal}) {

  const shadowValues = useSelector(state => state.shadows)

  useEffect(() => {
    document.body.style.overflowY = "hidden"

    return () =>  document.body.style.overflowY = "auto"

  }, [])

  let animationrunning = false
  function handleAnimation(e) {
    animationrunning = true
    e.target.textContent = 'Copied!'
    setTimeout(() => {
        animationrunning = false
        e.target.textContent = 'Copy'
    }, 1500)

    navigator.clipboard.writeText(`box-shadow: ${getBoxShadowValue(shadowValues)}`)
  }

  return (
    <div className='fixed z-10 inset-0 flex items-center justify-center bg-gray-600/75'
          onClick={closeModal}>
      <div
        onClick={e => e.stopPropagation()}
        className='max-w-[400px] rounded p-7 bg-gray-50 mb-[10vh]'
      >
        <div className='flex items-end mb-5'>
          <p className='font-semibold mr-5'>Here is the code 😡🥵</p>
          <button className='ml-auto mr-2 text-sm bg-blue-600 text-white hover:bg-blue-700 py-1 px-3 rounded'
              onClick={handleAnimation}>
            Copy
          </button>
          <button className='text-sm bg-red-600 text-white hover:bg-red-700 py-1 px-3 rounded'
                  onClick={closeModal}>
            Close
          </button>
        </div>
        <p className='rounded bg-gray-100'>
          <span className='font-semibold '>Box shadow :</span>
          <span>{getBoxShadowValue(shadowValues)}</span> 
        </p>
      </div>
    </div>
  )
}
