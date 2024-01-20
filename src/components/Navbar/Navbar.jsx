import "./Navbar.css"

export const Navbar = () => {
    return (
        <div className="sticky top-0">
            <div className='flex items-center justify-between px-5 py-2 bg-[#013236] '>
                <img className='w-20' src="https://images.vexels.com/media/users/3/137346/isolated/lists/69d8744660562093b1a7f6a35e9fb61f-diseno-lgbt-con-logo-de-corazon.png" alt="" />
                <ul className='flex'>
                    <li className='mx-7 text-[#e0f0ea] textNavbar'> Quienes somos
                    </li>
                    <li className='mx-7 text-[#e0f0ea] textNavbar'> En que estamos
                    </li>
                    <li className='mx-7 text-[#e0f0ea] textNavbar'> Contacto
                    </li>
                    <li className='mx-7 text-[#e0f0ea] textNavbar'> Necesito ayuda
                    </li>
                    <li className='mx-7 text-[#e0f0ea] textNavbar'>
                    </li>

                </ul>



            </div >
        </div>
    )
}

