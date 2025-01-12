import React from 'react'

export default function Password({inputstates,setInputStates,showvalidation}) {
  return (
    <>
        <label htmlFor="password" className='text-slate-50 inline-block mt-5'>Mot de passe ( 6 caractères min dont 1 chiffre )</label>
        <input id='password' type="password" className='rounded w-full p-1 mt-2'
            value={inputstates.password}
            onChange={e => setInputStates({...inputstates, password: e.target.value})}
        />
        {showvalidation.password && (
            <p className='text-red-400 font-semibold mt-3'>Password incorrect</p>
        )}
    </>
  )
}
