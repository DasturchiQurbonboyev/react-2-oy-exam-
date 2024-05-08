import React from 'react'

const LogInComponent = () => {
    return (
        <div className='mx-auto w-[500px] flex flex-col gap-7'>
            <div>
                <label htmlFor="">Username</label>
                <br />
                <input className='p-[15px] w-full rounded-md  border outline-none focus:border-[#33A0FF]' type="text" />
            </div>
            <div>
                <label htmlFor="">Password</label>
                <br />
                <input className='p-[15px] w-full rounded-md  border outline-none focus:border-[#33A0FF]' type="password" />
            </div>
            <div>
                <button className='w-full bg-[#33A0FF] text-white font-[600] py-[20px] px-[40px] rounded-md outline-none     '>LOGIN</button>
            </div>
        </div>
    )
}

export default LogInComponent