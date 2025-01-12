import React from 'react'

export default function Pseudo({inputstates,setInputStates,showvalidation}) {
  return (
    <>
        <label htmlFor="userName" className='text-slate-50'>Pseudo ( 3 - 16 caractères )</label>
        <input id='userName' type="text" className='rounded w-full p-1 mt-2'
            value={inputstates.pseudo}
            onChange={e => setInputStates({...inputstates, pseudo: e.target.value})}
        />
        {showvalidation.pseudo && (
            <p className='text-red-400 font-semibold mt-3'>Pseudo incorrect</p>
        )}
    </>
  )
}