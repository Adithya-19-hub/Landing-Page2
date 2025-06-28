import React from 'react';
import { IoFastFoodOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

function Navbar() {

    let array = [
        { to: '/', name: 'Home' },
        { to: '#', name: 'About us' },
        { to: '#', name: 'Recipe' },
        { to: '#', name: 'Galery' },
    ];

    return (
        <div>
            <header>
                <nav>
                    <ul className='flex justify-center pt-7 flex-wrap'>
                        <div className='flex space-x-2 mr-17 max-sm:mr-50'>
                            <IoFastFoodOutline className='text-red-600 text-3xl cursor-pointer max-sm:text-2xl' />
                            <h1 className='font-bold text-xl tracking-wide max-sm:text-lg'>Chef's Kitchen</h1>
                        </div>
                        <div className='flex space-x-5 max-sm:invisible'>
                            {/* Looping through Map function */}
                            {
                                array.map(function (items, index) {
                                    return <li key={index}><Link to={items.to} className='text-zinc-500'>{items.name}</Link></li>
                                })
                            }
                        </div>
                        <div className='flex mx-15 space-x-7'>
                            <h1><a href="#" className='font-semibold max-sm:invisible'>+1(909) 235-9418</a></h1>
                            <button className='text-red-600 bg-red-200 rounded py-1 px-3 cursor-pointer hover:bg-red-300 max-sm:absolute right-[0] top-[30px]'>Sign In</button>
                        </div>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Navbar
