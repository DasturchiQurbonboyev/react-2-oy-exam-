import React from 'react'
import { CgShoppingCart } from 'react-icons/cg'
import { FaRegHeart, FaSearch } from 'react-icons/fa'
import { IoPersonOutline } from 'react-icons/io5'
import logo from '../../assets/images/navbar/logo.png'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FiLogOut } from 'react-icons/fi'
import { useSelector } from 'react-redux'

const Navbar = () => {

    const wishes = useSelector(state => state.wishlist.value)
    const carts = useSelector(state => state.cart.value);


    const adminLocation = useLocation().pathname
    const navigate = useNavigate()
    const remov = () => {
        navigate("/")
        localStorage.removeItem("token")
    }

    if (adminLocation === "/admin") {
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
                        </div>
                        <div>
                            <Link to={"/wishlist"}>
                                <FaRegHeart />
                            </Link>

                        </div>
                        <div className='cursor-pointer relative'>
                            <Link to={"/cart"}>
                                <CgShoppingCart className='size-[20px]' />
                            </Link>

                        </div>
                        <div className='flex justify-between items-center gap-2'>
                            <p className='hidden min-[400px]:block'> Items</p>
                            <p className='text-[#666]    '>$0.05</p>
                            <FaSearch className='size-[20px]' />
                        </div>
                    </div>
                </div>
                <div style={{ position: "sticky", marginBottom: 50 }} className='sticky top-0 bg-white'>
                    <div className='kontainer flex    h-[70px]    items-center justify-between '>
                        <div className='min-[500px]:w-[30%]'>
                            <Link to={"/"}>
                                <img src={logo} alt="" />
                            </Link>
                        </div>
                        <ul className='hidden min-[530px]:flex items-center justify-between w-[70%] '>
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
                            <li typeof='onSubmit' onClick={() => remov()} className=' hidden    cursor-pointer min-[700px]:flex items-center gap-2 border-2 hover:shadow-md rounded-[10px] px-3 py-1 '>
                                <FiLogOut />
                                <span>log Out</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }


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
                    </div>
                    <div className='relative'>
                        <p className='absolute -top-4 -right-2 bg-red-400 text-white w-[18px] h-[18px] rounded-[50%] flex justify-center items-center '>
                            <span>
                                {wishes.length}
                            </span>
                        </p>
                        <Link to={"/wishlist"}>
                            <FaRegHeart />
                        </Link>
                    </div>
                    <div className='cursor-pointer relative'>
                        <p className='absolute -top-4 -right-2 bg-red-400 text-white w-[18px] h-[18px] rounded-[50%] flex justify-center items-center '>
                            <span>
                                {carts.length}
                            </span>
                        </p>
                        <Link to={"/cart"}>
                            <CgShoppingCart className='size-[20px]' />
                        </Link>
                    </div>
                    <div className='flex justify-between items-center gap-2'>
                        <p className='hidden min-[400px]:block'> Items</p>
                        <p className='text-[#666]    '>$0.00</p>
                        <FaSearch className='size-[20px]' />
                    </div>
                </div>
            </div>
            <div style={{ position: "sticky", marginBottom: 50 }} className='sticky top-0 bg-white'>
                <div className='kontainer flex   h-[70px]    items-center justify-between '>
                    <div className='min-[500px]:w-[30%]'>
                        <Link to={"/"}>
                            <img src={logo} alt="" />
                        </Link>
                    </div>
                    <ul className='hidden min-[530px]:flex items-center justify-between w-[70%] '>
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
                        <li >
                            <Link to={"/login"}>
                                LOG IN
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar