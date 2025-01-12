
import { useState } from "react"
import hamburger from './assets/hamburger.svg'
import close from './assets/close.svg'

export default function Navbar() {

    const [showmenu, setShowmenu] = useState(false)

    return (
        <nav className="fixed top-0 w-full flex justify-center p-4 bg-slate-200">
            <ul className={`${showmenu ? "flex" : "hidden"} flex-col items-center bg-slate-200 w-full absolute top-full pb-5 sm:flex sm:relative sm:flex-row sm:pb-0 sm:justify-center`}>
                <li>
                    <a href="#" className="inline-block py-2 mx-4 text-lg sm:py-0">Accueil</a>
                </li>
                <li>
                    <a href="#" className="inline-block py-2 mx-4 text-lg sm:py-0">Services</a>
                </li>
                <li>
                    <a href="#" className="inline-block py-2 mx-4 text-lg sm:py-0">Tarifs</a>
                </li>
                <li>
                    <a href="#" className="inline-block py-2 mx-4 text-lg sm:py-0">Contact</a>
                </li>
            </ul>
            <button onClick={() => setShowmenu(!showmenu)} className="ml-auto sm:hidden">
                <img className="w-4" src={showmenu ? close : hamburger} alt={showmenu ? "Cacher" : "Montrer"} />
            </button>
        </nav>
    )
}
