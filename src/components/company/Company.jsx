import React from 'react'
import car from '../../assets/images/company/car.png'
import operator from '../../assets/images/company/operator.png'
import dollar from '../../assets/images/company/dollar.png'
import nike from '../../assets/images/company/nike.png'
import figma from '../../assets/images/company/figma.png'
import krasofka from '../../assets/images/company/krasofka.png'
import kronos from '../../assets/images/company/kronos.png'
import yulduz from '../../assets/images/like/rate.png'

const Company = () => {
    return (
        <div className='kontainer' >
            <div className='grid min-[680px]:flex items-center justify-around mt-[40px]'>
                <div className='flex flex-col gap-[15px] items-center max-w-[200px]     '>
                    <img className='h-[80px]' src={car} alt="" />
                    <h5 className='text-[#22262A] text-[27px] font-[500]     '>FREE SHIPPING</h5>
                    <p className='text-center text-[#22262A] text-[18px]    '>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div className='flex flex-col gap-[15px] items-center max-w-[200px]     '>
                    <img className='h-[80px]' src={dollar} alt="" />
                    <h5 className='text-[#22262A] text-[27px] font-[500]     '>100% REFUND</h5>
                    <p className='text-center text-[#22262A] text-[18px]    '>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div className='flex flex-col gap-[15px] items-center max-w-[200px]     '>
                    <img className='h-[80px]' src={operator} alt="" />
                    <h5 className='text-[#22262A] text-[27px] font-[500]     '>SUPPORT 24/7</h5>
                    <p className='text-center text-[#22262A] text-[18px]    '>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>

            <div className=' '>
                <h2 className='text-center  my-[50px]  text-[34px] font-[600]    '>LATEST NEWS</h2>
                <div className='    max-[1100px]:flex-wrap   flex justify-center min-[1100px]:justify-between gap-8 items-center'>
                    <div className='min-[450px]:flex items-center gap-4'>
                        <img className='w-[100px]' src={nike} alt="" />
                        <div>
                            <p className='text-[#C1C8CE] text-[18px] font-[500]   '>01 Jan, 2015</p>
                            <h5 className='text-[22px] font-[600]       '>Fashion Industry</h5>
                            <p className='text-[#22262A] text-[18px]     '>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </div>
                    <div className='min-[450px]:flex items-center gap-4'>
                        <img className='w-[100px]' src={figma} alt="" />
                        <div>
                            <p className='text-[#C1C8CE] text-[18px] font-[500]   '>01 Jan, 2015</p>
                            <h5 className='text-[22px] font-[600]       '>Best Design Tools</h5>
                            <p className='text-[#22262A] text-[18px]     '>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </div>
                    <div className='min-[450px]:flex items-center gap-4'>
                        <img className='w-[100px]' src={kronos} alt="" />
                        <div>
                            <p className='text-[#C1C8CE] text-[18px] font-[500]   '>01 Jan, 2015</p>
                            <h5 className='text-[22px] font-[600]       '>HR Community</h5>
                            <p className='text-[#22262A] text-[18px]     '>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mb-[50px]'>
                <h2 className='text-center   my-[50px]  text-[34px] font-[600]    '>FEATURED PRODUCTS</h2>
                <div className='grid  min-[1100px]:flex gap-[50px] justify-around'>
                    <div className=' flex gap-3'>
                        <img src={krasofka} alt="" />
                        <div className='flex flex-col gap-3 items-start' >
                            <h6 className='text-[22px]   '>Blue Swade Nike Sneakers</h6>
                            <img src={yulduz} alt="" />
                            <div className='flex gap-3'>
                                <h5 className='text-[#FF4858] text-[20px] font-[500]     ' >$499</h5>
                                <h5 className='text-[#C1C8CE] text-[20px] font-[500] line-through     ' >$599</h5>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <img src={krasofka} alt="" />
                        <div className='flex flex-col gap-3 items-start' >
                            <h6 className='text-[22px]   '>Blue Swade Nike Sneakers</h6>
                            <img src={yulduz} alt="" />
                            <div className='flex gap-3'>
                                <h5 className='text-[#FF4858] text-[20px] font-[500]     ' >$499</h5>
                                <h5 className='text-[#C1C8CE] text-[20px] font-[500] line-through     ' >$599</h5>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <img src={krasofka} alt="" />
                        <div className='flex flex-col gap-3 items-start' >
                            <h6 className='text-[22px]   '>Blue Swade Nike Sneakers</h6>
                            <img src={yulduz} alt="" />
                            <div className='flex gap-3'>
                                <h5 className='text-[#FF4858] text-[20px] font-[500]     ' >$499</h5>
                                <h5 className='text-[#C1C8CE] text-[20px] font-[500] line-through     ' >$599</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border-2 min-[500px]:w-[80%] min-[900px]:w-[50%] mx-[auto] my-[100px] flex rounded-md border-[#BCDDFE]'>
                <input className='w-full  p-[20px]  outline-none ' type="text" placeholder='Search query...' />
                <button className=' border-2 border-[#40BFFF] px-[27px] bg-[#40BFFF] text-white  '>Search</button>
            </div>
        </div>
    )
}

export default Company