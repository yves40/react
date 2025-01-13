import React from 'react'
import FruityCart from './FruityCart'
import { useSelector, useDispatch } from 'react-redux'
import { addOne, removeOne } from '../../reduxfeatures/cart'

export default function Fruity() {

    const fruitslist = useSelector(state => state.fruits)
    const dispatch = useDispatch()

    return (
    <>
        <h1 className='text-4xl text-slate-100 font-bold'>Fruity</h1>
        <p className='text-xl text-slate-200 mt-4 mb-10'>Pick your fruits 😎</p>
        <ul className='flex gap-4 mb-4'>
            {fruitslist.list.map(fruit => (
                <li key={fruit.id} className='bg-slate-100 p-4 w-full rounded'>
                    <img src={fruit.url} alt="fruit" className='w-full h-[200px] object-cover mb-3'/>
                    <div className='flex justify-between items-baseline mb-4'>
                        <h2 className='text-2xl mb-2 font-semibold'>{fruit.name}</h2>
                        <p className='text-lg font-semibold'>La pièce {fruit.price} €</p>
                    </div>
                    <div className='flex gap-2'>
                        <button className='w-full bg-green-600 hover:bg-green-500 text-slate-100 p-1
                            rounded text-lg'
                            onClick={()=> dispatch(addOne(fruit))}>
                            Ajouter
                        </button>
                        <button className='w-full bg-red-600 hover:bg-red-500 text-slate-100 p-1
                            rounded text-lg'
                            onClick={() => dispatch(removeOne(fruit.id))}>
                            Retirer
                        </button>
                    </div>
                </li>
            ))}
        </ul>
        <FruityCart></FruityCart>
    </>
  )
}