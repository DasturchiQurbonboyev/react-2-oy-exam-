import React from 'react'
import hero from "../../assets/images/hero/hero.png"

const Hero = () => {
    return (
        <div className='kontainer'>
            <div className='pt-5 z-0'>
                <img src={hero} alt="" />
            </div>
            <div className='relative -mt-[100px] flex gap-2 justify-center'>
                <div className='  w-[400px] bg-[#e0dddd] rounded-md p-[30px]'>
                    <h4 className='text-[#223263] text-[20px] font-[700] leading-[30px] max-w-[200px]    '>FS - QUILTED MAXI CROSS BAG</h4>
                    <div className='h-[200px] flex justify-center'>
                        <img className='w-ful h-full' src="https://daryo.uz/static/728x546_1_eb8d6e0e86b5ddd8a3950504ab41da7f@1706x1280_0xac120004_1589250801681760044.jpeg" alt="" />
                    </div>
                    <div className='flex gap-2 mt-2'>
                        <del className='text-[#9098B1]'>
                            <p className='text-[#9098B1] text-[18px] leading-[27px]   '>$534,33</p>
                        </del>
                        <p className='text-[#FB7181] text-[18px] leading-[27px] font-[700]     '>24% Off</p>
                    </div>
                    <h6 className='text-[#40BFFF] text-[30px] font-[700] leading-[54px] text-end     '>$299,43</h6>
                </div>
                <div className='  w-[400px] bg-[#f0eded] rounded-md p-[30px]'>
                    <h4 className='text-[#223263] text-[20px] font-[700] leading-[30px] max-w-[200px]    '>FS - QUILTED MAXI CROSS BAG</h4>
                    <div className='h-[200px] flex justify-center'>
                        <img className='w-ful h-full' src="https://ae04.alicdn.com/kf/Se783c7f08fb347ecb949cbb8c7f473fbD.jpg_480x480.jpg" alt="" />
                    </div>
                    <div className='flex gap-2 mt-2'>
                        <del className='text-[#9098B1]'>
                            <p className='text-[#9098B1] text-[18px] leading-[27px]   '>$534,33</p>
                        </del>
                        <p className='text-[#FB7181] text-[18px] leading-[27px] font-[700]     '>24% Off</p>
                    </div>
                    <h6 className='text-[#40BFFF] text-[30px] font-[700] leading-[54px] text-end     '>$299,43</h6>
                </div>
                <div className='  w-[400px] bg-[#f0eded] rounded-md p-[30px]'>
                    <h4 className='text-[#223263] text-[20px] font-[700] leading-[30px] max-w-[200px]    '>FS - QUILTED MAXI CROSS BAG</h4>
                    <div className='h-[200px] flex justify-center'>
                        <img className='w-ful h-full' src="https://ae04.alicdn.com/kf/Hed34df4873e94a22bf0a94e33ad9c9bcp.jpg" alt="" />
                    </div>
                    <div className='flex gap-2 mt-2'>
                        <del className='text-[#9098B1]'>
                            <p className='text-[#9098B1] text-[18px] leading-[27px]   '>$534,33</p>
                        </del>
                        <p className='text-[#FB7181] text-[18px] leading-[27px] font-[700]     '>24% Off</p>
                    </div>
                    <h6 className='text-[#40BFFF] text-[30px] font-[700] leading-[54px] text-end     '>$299,43</h6>
                </div>
            </div>
        </div>
    )
}

export default Hero