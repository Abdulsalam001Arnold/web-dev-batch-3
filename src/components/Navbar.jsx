
import { Link } from "react-router-dom"

export default function Navbar() {
    return(
        <nav className="p-4 w-full bg-black/70 flex flex-col items-center justify-center">
            <ul className="flex flex-col gap-x-1.5 items-center justify-center">
                <li>
                <Link to={'/'}>
                    Home
                </Link>
                </li>

                <li>
                <Link to={'/about'}>
                    About
                </Link>
                </li>

                <li>
                <Link to={'/contact'}>
                    Contact
                </Link>
                </li>
            </ul>
        </nav>
    )
};
