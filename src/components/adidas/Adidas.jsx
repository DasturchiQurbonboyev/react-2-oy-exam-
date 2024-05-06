import React from 'react'
import adidas from '../../assets/images/adidas/adidas.png'


const Adidas = () => {
    return (
        <div className='kontainer bg-[#40BFFF] grid grid-cols-2 items-center  '>
            <div className='pl-8 py-[50px]' >
                <h2 className='text-[55px] font-[500] text-white    '  >Adidas Men Running Sneakers</h2>
                <p className='text-[24px] text-white     '>Performance and design. Taken right to the edge.</p>
                <p className='text-[20px] text-white border-b-4 w-[110px] pb-2    '>SHOP NOW</p>
            </div>
            <div className='-mt-[50px]      '>
                <img src={adidas} alt="" />
            </div>
        </div>
    )
}

export default Adidas