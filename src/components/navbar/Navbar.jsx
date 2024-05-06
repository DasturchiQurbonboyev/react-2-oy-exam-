import React from 'react'
import { CgShoppingCart } from 'react-icons/cg'
import { FaSearch } from 'react-icons/fa'
import { IoPersonOutline } from 'react-icons/io5'
import logo from '../../assets/images/navbar/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className=' shadow-md   ' >
            <div className='kontainer h-[50px]  border-b-2 flex items-center justify-between  '>
                <div className='flex gap-3'>
                    <select className=' outline-none ' name="" id="">
                        <option value="">
                            EN
                        </option>
                        <option value="">
                            UZ
                        </option>
                        <option value="">
                            RUS
                        </option>
                    </select>
                    <select className='outline-none ' name="" id="">
                        <option value="">
                            USD
                        </option>
                        <option value="">
                            RUB
                        </option>
                        <option value="">
                            SUM
                        </option>
                    </select>
                </div>
                <div className='flex gap-5 items-center'>
                    <div className='flex justify-between items-center gap-2'>
                        <IoPersonOutline className='size-[20px]' />
                        <p>My profile</p>
                    </div>
                    <div className='cursor-pointer'>
                        <Link to={"/cart"}>
                            <CgShoppingCart className='size-[20px]' />
                        </Link>
                    </div>
                    <div className='flex justify-between items-center gap-2'>
                        <p> Items</p>
                        <p className='text-[#666]    '>$0.00</p>
                        <FaSearch className='size-[20px]' />
                    </div>
                </div>
            </div>
            <div style={{ position: "sticky", marginBottom: 50 }} className='sticky top-0 bg-white'>
                <div className='kontainer flex   h-[70px]    items-center justify-between '>
                    <div className='w-[30%]'>
                        <Link to={"/"}>
                            <img src={logo} alt="" />
                        </Link>
                    </div>
                    <ul className='flex items-center justify-between w-[70%] '>
                        <li>
                            <Link to={"/"}>
                                HOME
                            </Link>
                        </li>
                        <li>
                            BAGS
                        </li>
                        <li>
                            SNEAKERS
                        </li>
                        <li>
                            BELT
                        </li>
                        <li>
                            <Link to={"/contact"}>
                                CONTACT
                            </Link>
                        </li>
                        <li>
                            <Link to={"/wishlist"}>
                                WISHLIST
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar