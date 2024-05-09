import React, { useEffect } from 'react'
import { FaFacebookF, FaRegHeart, FaTwitter } from 'react-icons/fa'
import rate from '../../assets/images/like/rate.png'
import { TiShoppingCart } from 'react-icons/ti'
import Products from '../products/Products'
import { useDispatch, useSelector } from 'react-redux'
import { FcLike } from 'react-icons/fc'
import { toggleWishes } from '../../context/wishlistSlice'
import { addToCart, decCart, incCart } from '../../context/cartSlice'


const Single = () => {





    const wishes = useSelector(state => state.wishlist.value)
    const carts = useSelector(state => state.cart.value);
    const dispatch = useDispatch()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const single = useSelector(state => state.single.value)[0]


    let kart = carts.map((el) => {
        return el.id === single.id
    })

    let kartInx
    for (let i = 0; i < kart.length; i++) {
        kart[i] ? kartInx = i : ""
    }

    console.log(kartInx);



    return (
        <div className='kontainer '>
            <div className='   lg:flex  items-start gap-8 '>
                <div className=''>
                    <div className='  xl:flex gap-10  '>
                        <div>
                            <div className='max-w-[400px]   h-[400px] mb-[80px]'>
                                <img className='w-full h-full object-contain' src={single.thumbnail} alt="" />
                            </div>
                            <div className='flex h-[80px] gap-4 justify-between '>
                                <img className='w-[85px] object-contain    ' src={single.images[0]} alt="" />
                                <img className='w-[85px] object-contain   ' src={single.images[1]} alt="" />
                                <img className='w-[85px] object-contain   ' src={single.images[2]} alt="" />
                                <img className='w-[85px] object-contain   ' src={single.images[3]} alt="" />
                            </div>
                        </div>
                        <div className=' flex flex-col gap-[15px]'>
                            <h2 className='text-[24px] text-[#22262A]    '>{single.title}</h2>
                            <div className='flex gap-3 items-center'>
                                <img src={rate} alt="" />
                                <label className='text-[#C1C8CE] text-[14px]  ' htmlFor="">0 reviews</label>
                                <span className='text-[#33A0FF] text-[14px]   '>Submit a review</span>
                            </div>
                            <hr />
                            <div className='flex items-end gap-4'>
                                <h3 className='text-[#40BFFF] text-[20px] font-[700]      '>$ {kart.includes(true) ? single.price * carts[kartInx].quantity : single.price}</h3>
                                <del className='text-[#40BFFF] text-[14px]     '>$ {single.price + 10}</del>
                                <p className='text-[#FB7181]'>24% Off</p>
                            </div>
                            <div className='grid grid-cols-2 border-b-2 pb-2    '>
                                <div className='flex flex-col gap-[15px]'>
                                    <p>Availability:</p>
                                    <p>Category:</p>
                                    <p>Free shipping</p>
                                </div>
                                <div className='flex flex-col gap-[15px]'>
                                    <p>In stock</p>
                                    <p>Accessories</p>
                                </div>
                            </div>
                            <div className='rounded-md flex gap-5     '>
                                <h5>Select Color:</h5>
                                <div className='flex justify-between gap-4'>
                                    <div className='w-[26px] h-[26px] p-[5px] bg-[#006CFF] border rounded-[50%]    '></div>
                                    <div className='w-[26px] h-[26px] p-[5px] bg-[#FC3E39] border rounded-[50%]    '></div>
                                    <div className='w-[26px] h-[26px] p-[5px] bg-[#171717] border rounded-[50%]    '></div>
                                    <div className='w-[26px] h-[26px] p-[5px] bg-[#FFF600] border rounded-[50%]    '></div>
                                </div>
                            </div>
                            <div className='flex justify-between items-center gap-2 border-b-2 pb-2 '>
                                <p>Sort By</p>
                                <select className='bg-transparent outline-none border py-2 px-4 rounded-md' name="Name" id="">
                                    <option value="xs">XS</option>
                                    <option value="xl">XL</option>
                                    <option value="M">M</option>
                                    <option value="SL">SL</option>
                                </select>
                            </div>
                            <div className='flex justify-between items-center '>
                                <div className={` ${kart.includes(true) ? "flex" : "hidden"}`}>
                                    <button onClick={() => dispatch(decCart(carts[kartInx]))} className='p-3 cursor-pointer bg-[#F6F7F8] rounded-l-md     '>-</button>
                                    <p className='p-3 bg-[#F6F7F8]    '>{kartInx ? carts[kartInx].quantity : 1}</p>
                                    <div onClick={() => dispatch(incCart(carts[kartInx]))} className='p-3 cursor-pointer bg-[#F6F7F8] rounded-r-md     '>+</div>
                                </div>
                                <div className='flex items-center gap-[15px]'>
                                    <button onClick={() => {
                                        dispatch(addToCart(single))
                                        // toast.success("Maxsulot Cartga qo'shildi")
                                    }} className='flex items-center gap-2 bg-[#cfe5fa] px-[15px] py-[12px] text-[#33A0FF]  rounded-md '><TiShoppingCart /><span>Add To Cart</span></button>
                                    <button onClick={() => dispatch(toggleWishes(single))} className='bg-[#cfe5fa] px-[15px] py-[15px] text-[#33A0FF]  rounded-md'>
                                        {
                                            wishes.some(w => w.id == single.id) ?
                                                <FcLike className="size-6" /> :
                                                <FaRegHeart className=' size-6' />
                                        }
                                    </button>
                                </div>
                            </div>
                            <div className='flex gap-4 justify-end'>
                                <div className='bg-[#385C8E] px-[30px] py-[13px] rounded-md text-white  flex items-center gap-3 justify-center    '>
                                    <FaFacebookF />
                                    <p>Share on Facebook</p>
                                </div>
                                <div className='bg-[#03A9F4] px-[30px] py-[13px] rounded-md text-white  flex items-center gap-3 justify-center    '>
                                    <FaTwitter />
                                    <p>Share on Twitter</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#FAFAFB] rounded-md p-7  mt-10 mb-9   '>
                        <div className='flex  gap-[75px] border-b-2   '>
                            <h4 className='pb-[30px]'>Product Infomation</h4>
                            <h4 className='pb-[30px]'>Reviews 0</h4>
                            <h4 className='pb-[30px]'>Another tab</h4>
                        </div>
                        <div className='pt-[20px] flex flex-col gap-[15px] text-[#9098B1]     '>
                            <p>air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.</p>
                            <p>air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.</p>
                            <p>air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.</p>
                        </div>
                    </div>
                </div>
                {/* left */}
                <div className="  flex w-[300px]  relative  flex-col  rounded-lg border border-gray-100 bg-white shadow-md">
                    <div className='product w-[300px] '>
                        <div className=' flex justify-center items-center p-[15px] '>
                            <img className="object-cover h-[250px]" src={single.thumbnail} alt="product image" />
                            <span className="absolute top-0 left-0 m-2 rounded-full bg-[#FF4858] px-2 text-center text-sm font-medium text-white">HOT</span>
                        </div>
                    </div>
                    <div className="mt-4 px-5 pb-5">
                        <h5 className="line-clamp-1 text-xl tracking-tight text-slate-900">{single.title}</h5>
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
                        <div className='flex justify-between items-center'>
                            <p className='text-[#40BFFF] text-[18px] font-[700] leading-[32px]  '>${single.price}</p>
                            <p className='text-[#9098B1] text-[14px] font-[400] leading-[21px]  '><del>${single.price + 10}</del></p>
                            <p className='text-[#FB7181] text-[14px] font-[700] leading-[21px]  '>24% Off</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Single



