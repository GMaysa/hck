import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'
// import '@fortawesome/free-regular-svg-icons'

const Navbar = () => {
    return ( 
        <div className="bg-[#CBD5E1]/30 py-6 px-[8rem] backdrop-blur-sm">
            <h1 className='w-full text-2xl font-bold text-[#0F172A]'><FontAwesomeIcon icon={icon({name: 'coffee', style: 'solid'})} />may<span className="font-normal">profile.</span></h1>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/experience'>Experience</Link>
                <Link to='/skills'>Skills</Link>
                <Link to='/interest'>Interest</Link>
                <Link to='/awards'>Awards</Link>
            </nav>
        </div>
    )
}

export default Navbar