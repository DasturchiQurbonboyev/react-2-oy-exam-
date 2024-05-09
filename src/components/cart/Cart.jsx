import React, { useEffect, useState } from 'react'
import { FaChevronDown, FaChevronUp, FaRegTrashAlt, FaTrashAlt } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { incCart, decCart, remuverFromCart, clearCart } from '../../context/cartSlice'
import { IoMdClose } from 'react-icons/io'
import Edit from '../edit/Edit'
import Checkout from '../checkout/Checkout'
import Empty from '../empty/Empty'

const Cart = () => {

    const [checkout, setCheckout] = useState(null)
    const carts = useSelector(state => state.cart.value);
    const dispatch = useDispatch();
    let sum = carts.reduce((acc, el) => {
        return acc + el.quantity * el.price
    }, 0)

    useEffect(() => {
        scrollTo(0, 0)
    }, [])


    let items = carts?.map((el) =>
        <div key={el.id}>
            <div className=' hidden min-[850px]:block   px-[40px] py-[24px] shadow-md  min-[850px]:grid grid-cols-4   items-center    '>
                <div className='min-[1100px]:flex items-center gap-5 relative'>
                    <img src={el.thumbnail} className='w-[100px]' alt="" />
                    <p>{el.title}</p>
                    <div onClick={() => dispatch(remuverFromCart(el))} className='absolute cursor-pointer bg-red-600 -top-[7px] left-[85px] h-6 w-6 flex justify-center items-center rounded-[50%]  '><IoMdClose className='text-white size-[20px]' /></div>
                </div>
                <p>$ {el.price} </p>
                <div className='flex items-center gap-3 w-[100px] justify-between  border px-3 py-2 rounded-md '>
                    <p>{el.quantity}</p>
                    <div>
                        <FaChevronUp onClick={() => dispatch(incCart(el))} className='cursor-pointer text-[#33A0FF]' />
                        <button disabled={el.quantity <= 1}>
                            <FaChevronDown onClick={() => dispatch(decCart(el))} className='cursor-pointer text-[#33A0FF] ' />
                        </button>
                    </div>
                </div>
                <p className='text-end'>$ {el.price * el.quantity} </p>
            </div>
            <div className=' min-[850px]:hidden max-[] flex  shadow-md py-3 justify-center'>
                <div className='flex   gap-8 relative'>
                    <img src={el.thumbnail} className='w-[100px]' alt="" />
                    <div >
                        <p>{el.title}</p>
                        <div className='flex items-end justify-between gap-8' >
                            <p>$ {el.price} </p>
                            <div className='flex items-center gap-3 w-[100px] justify-between  border px-3 py-2 rounded-md '>
                                <p>{el.quantity}</p>
                                <div>
                                    <FaChevronUp onClick={() => dispatch(incCart(el))} className='cursor-pointer text-[#33A0FF]' />
                                    <button disabled={el.quantity <= 1}>
                                        <FaChevronDown onClick={() => dispatch(decCart(el))} className='cursor-pointer text-[#33A0FF] ' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div onClick={() => dispatch(remuverFromCart(el))} className='absolute cursor-pointer bg-red-600 -top-[7px] left-[85px] h-6 w-6 flex justify-center items-center rounded-[50%]  '><IoMdClose className='text-white size-[20px]' /></div>
                </div>
            </div>
        </div>
    )


    if (carts.length > 0) {
        return (

            <div>
                {
                    checkout && <Checkout checkout={carts} setCheckout={setCheckout} />
                }
                <div className='kontainer grid gap-10'>
                    <div className='text-end flex justify-end'>
                        <button onClick={() => dispatch(clearCart())} className=' flex items-center gap-3'><FaRegTrashAlt className='size-7' /> Clear All </button>
                    </div>
                    <div className='min-[530px]:hidden flex justify-end'>
                        <select name="" id="">
                            <option value="">Product</option>
                            <option value="">Price</option>
                            <option value="">Quantity</option>
                            <option value="">Subtotal</option>
                        </select>
                    </div>
                    <div className='px-[40px] py-[24px] shadow-md max-[530px]:hidden  min-[530px]:grid grid-cols-4   items-center    '>
                        <p>Product</p>
                        <p>Price</p>
                        <p>Quantity</p>
                        <p className='text-end'>Subtotal</p>
                    </div>

                    {items}





                    <div className='flex justify-between'>
                        <button className='px-12 py-4 border rounded-md       ' >Return To Shop</button>
                        <button className='px-12 py-4 border rounded-md       ' >Update Cart</button>
                    </div>
                    <div className=' grid min-[1100px]:flex max-[1100px]:justify-center max-[1100px]:gap-[25px]   justify-between mt-20 '>
                        <div className='grid min-[565px]:flex gap-4 items-start'>
                            <input className='border min-[565px]:w-[300px] rounded-md px-[24px] py-4 outline-none ' placeholder="Coupon Code" type="text" name="" id="" />
                            <button className='px-12 py-4 border rounded-md  text-white bg-[#33A0FF]      ' >Apply Coupon</button>
                        </div>
                        <div className='border border-[#000] rounded-md px-6 py-8 min-[565px]:w-[470px]   '>
                            <h5>Cart Total</h5>
                            <div className='flex justify-between items-center py-4 border-b-2'>
                                <p>Subtotal:</p>
                                <p>{carts.length}</p>
                            </div>
                            <div className='flex justify-between items-center py-4 border-b-2'>
                                <p>Shipping:</p>
                                <p>Free</p>
                            </div>
                            <div className='flex justify-between items-center py-4'>
                                <p>Total:</p>
                                <p>$ {sum}</p>
                            </div>
                            <div className='text-center'>
                                <button onClick={() => setCheckout(carts)} className='px-12 py-4 border rounded-md  text-white bg-[#33A0FF]      ' >Procees to checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
        )
    }

    return (
        <Empty />
    )

}

export default Cart