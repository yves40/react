import { Link, NavLink } from "react-router-dom"

export default function Navbar() {
    return (
        <nav className="p-2 text-center bg-slate-300">
            
            <NavLink to="/" className={({isActive}) => `${isActive && "text-red-600 font-bold"} mx-2 text-md`}
                state={{url: "/", request: "Back home", copyright: "CBS 1.10 Jan 12 2025"}}>
                    Home
            </NavLink>
            <NavLink to="/contact" className={({isActive}) => `${isActive && "text-red-600 font-bold"} mx-2 text-md`}
                state={{url: "/contact", request: "Get contact page home", copyright: "CBS 1.10 Jan 12 2025"}}>
                    Contact
            </NavLink>
        </nav>
    )
}
