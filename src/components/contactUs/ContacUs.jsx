import React from 'react'

const ContacUs = () => {
    return (
        <div className='kontainer '>
            <div className='grid shadow-md pr-8 min-[978px]:grid-cols-2 gap-[40px] '>
                <div className='bg-[#40BFFF] px-[15px] min-[543px]:px-[80px] flex-col flex gap-[32px] text-white py-[50px] min-[543px]:py-[120px]'>
                    <h5 className='taxt-[48px]  text-[48px] mb-[20px] '>Get in touch</h5>
                    <p>contact@e-comm.ng</p>
                    <a href="+234 4556 6665 34">+234 4556 6665 34</a>
                    <p>20 Prince Hakerem Lekki Phase 1, Lagos.</p>
                </div>
                <div className='flex gap-[20px] flex-col justify-center py-[40px]'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="">Fullname</label>
                        <input className='w-full  p-[20px]  outline-none  border' type="text" placeholder='James Doe' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="">Email</label>
                        <input className='w-full  p-[20px]  outline-none  border' type="email" placeholder='jamesdoe@gmail.com' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="">Message</label>
                        <textarea className='w-full h-[230px] resize-none  p-[20px]  outline-none   border' name="" id="" placeholder='Type your message'></textarea>
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

export default ContacUs