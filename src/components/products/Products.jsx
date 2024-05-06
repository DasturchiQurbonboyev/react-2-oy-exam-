import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { toggleWishes } from '../../context/wishlistSlice'
import { FcLike } from 'react-icons/fc'
import { addToCart } from '../../context/cartSlice'
import { toggleSingle } from '../../context/singleSlice'


const category = [
    "All", "Bags", "Sneakers", "Belt", "Sunglasses"
]



const categoryProduct = category?.map((el, inx) => (
    <li key={inx}>
        <p className='text-[22px] leading-[33px] border-b-4 border-[#fff] hover:border-b-[#33A0FF] hover:text-[#33A0FF] cursor-pointer   '>{el}</p>
    </li>
))

const Products = () => {


    const wishes = useSelector(state => state.wishlist.value)
    const dispatch = useDispatch()


    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("https://6634b1ce9bb0df2359a26950.mockapi.io/laylo/users")
            .then(res => setData(res.data))
    }, [])


    let products = data?.map((el) => (
        <div key={el.id} className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
            <div className='product '>
                <div className=' flex justify-center items-center p-[15px] '>
                    <img className="object-cover h-[250px]" src={el.image} alt="product image" />
                    <span className="absolute top-0 left-0 m-2 rounded-full bg-[#FF4858] px-2 text-center text-sm font-medium text-white">HOT</span>
                </div>
                <div className='poduct__cart flex justify-center items-center gap-5' >
                    <button onClick={() => dispatch(toggleWishes(el))} className='bg-white flex justify-center items-center rounded-[50%] h-[50px] w-[50px]    '>
                        {
                            wishes.some(w => w.id == el.id) ?
                                <FcLike className="size-10" /> :
                                <FaRegHeart className=' size-9 text-[#33A0FF]' />
                        }
                    </button>
                    <button onClick={() => {
                        dispatch(addToCart(el))
                        // toast.success("Maxsulot Cartga qo'shildi")
                    }} >
                        <MdOutlineShoppingCart className='size-[10px] text-[#33A0FF] bg-[#fff] p-2 w-[52px] h-[52px] rounded-[50%] cursor-pointer    ' />
                    </button>

                </div>
            </div>
            <div className="mt-4 px-5 pb-5">


                <h5 onClick={() => dispatch(toggleSingle(el))} title={el.title} className="line-clamp-1 text-xl tracking-tight text-slate-900"><Link to={"/single"}>{el.title}</Link></h5>
                <div className="flex items-center py-1 justify-center">
                    <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                </div>
                <div className='flex justify-between items-end'>
                    <p className='text-[#40BFFF] text-[18px] font-[700] leading-[32px]  '>${el.price}</p>
                    <p className='text-[#9098B1] text-[14px] font-[400] leading-[21px]  '><del>${el.price + 1}</del></p>
                    <p className='text-[#FB7181] text-[14px] font-[700] leading-[21px]  '>24% Off</p>
                </div>
            </div>
        </div>
    ))
    return (
        <div className='kontainer'>
            <div>
                <h2 className='text-center text-[35px] font-[600] text-[#22262A] mt-[65px]    '>BEST SELLER</h2>
                <ul className='flex justify-center gap-[30px] mt-[26px]'>
                    {categoryProduct}
                </ul>
            </div>
            <div className='flex flex-wrap'>
                {products}
            </div>
        </div>
    )
}

export default Products