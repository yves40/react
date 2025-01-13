import { useSelector } from "react-redux"

export default function FruityCart() {

    const fruitscart = useSelector(state => state.cart)
    
    return (
    <div className='bg-slate-100 rounded'>
        <p className='text-xl p-5 border-b border-slate-400'>Your cart</p>
        <ul>
            {fruitscart.cart.length > 0 && 
                fruitscart.cart.map(fruit => (
                    <li className="px-5 py-2 text-xl" key={fruit.id}>
                        <span className="font-semibold mr-2">{fruit.quantity}</span>
                        <span>{fruit.name}</span>
                    </li>
                ))}
                {fruitscart.cart.length === 0 && (
                    <li className="px-5 py-2 text-xl">Commencez vos achats</li>
                )}
        </ul>
        <p className='text-xl p-5 border-t border-slate-400'>
            Total price : {fruitscart.cart.length > 0 &&
                <span className="font-bold ml-2">{fruitscart.cart.reduce((acc, item) => 
                    item.price * item.quantity + acc, 0)} €</span> }
        </p>
    </div>
    )
}
