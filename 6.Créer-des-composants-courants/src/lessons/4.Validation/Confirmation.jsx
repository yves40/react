import React from 'react'

export default function Confirmation({inputstates,setInputStates,showvalidation}) {
  return (
    <>
        <label htmlFor="confirmation" className='text-slate-50 inline-block mt-5'>Confirmez le mot de passe</label>
        <input id='confirmation' type="password" className='rounded w-full p-1 mt-2'
            value={inputstates.passwordConfirmation}
            onChange={e => setInputStates({...inputstates, passwordConfirmation: e.target.value})}
        />
        {showvalidation.passwordConfirmation && (
            <p className='text-red-400 font-semibold mt-3'>Password non identiques</p>
        )}
    </>
  )
}
