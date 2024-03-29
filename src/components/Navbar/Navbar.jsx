import { Link } from "react-router-dom"
import "./Navbar.css"

export const Navbar = () => {
    return (
        <div className="sticky top-0">
            <div className='flex items-center justify-between px-5 py-2 bg-[#013236] '>
                <Link to={'/'}> <img className='w-20' src="https://images.vexels.com/media/users/3/137346/isolated/lists/69d8744660562093b1a7f6a35e9fb61f-diseno-lgbt-con-logo-de-corazon.png" alt="" /></Link>
                <ul className='flex'>
                    <Link className='mx-7 text-[#e0f0ea] textNavbar ' to={'/quienes'}> Quienes somos</Link>

                    <Link className='mx-7 text-[#e0f0ea] textNavbar' to={'/hacemos'}> Lo que hacemos</Link>

                    <Link className='mx-7 text-[#e0f0ea] textNavbar' to={'/contacto'}> Contacto </Link>

                    <Link className='mx-7 text-[#e0f0ea] textNavbar' to={'/necesito'}> Necesito ayuda
                    </Link>

                </ul>



            </div >
        </div>
    )
}

