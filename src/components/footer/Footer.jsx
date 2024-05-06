import React from 'react'
import { FaFacebookF, FaTwitter } from 'react-icons/fa'
import logo from "../../assets/images/footer/Icon.png"

const footer = () => {
    return (
        <div className=' bg-[#BCDDFE]'>
            <footer className="kontainer mt-[100px]">
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">


                    <div className="mt-16   flex justify-between">
                        <div className='flex max-w-[220px] flex-col gap-8' >
                            <div className="flex items-center gap-2">
                                <img src={logo} alt="" />
                                <p>E-Comm</p>
                            </div>
                            <p className=''>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.</p>

                        </div>

                        <div className=" max-w-[220px] text-center sm:text-left flex flex-col gap-8">
                            <p className="text-lg font-medium text-gray-900">Follow Us</p>
                            <p>Since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
                            <div className='flex gap-6'>
                                <FaFacebookF />
                                <FaTwitter />
                            </div>
                        </div>

                        <div className=" max-w-[220px] flex flex-col gap-8">
                            <p className="text-lg font-medium text-gray-900">Contact Us</p>

                            <p>E-Comm , 4578 Marmora Road, Glasgow D04 89GR</p>
                        </div>
                    </div>

                    <div className='flex justify-between mt-10'>
                        <div className=" max-w-[220px] flex flex-col gap-8">
                            <p className="text-lg font-medium text-gray-900">Infomation</p>
                            <div>
                                <p>Infomation</p>
                                <p>Infomation </p>
                                <p>Privacy Policy</p>
                                <p>Terms & Conditions</p>
                            </div>
                        </div>
                        <div className=" max-w-[220px] flex flex-col gap-8">
                            <p className="text-lg font-medium text-gray-900">Service</p>
                            <div>
                                <p>Infomation</p>
                                <p>Infomation </p>
                                <p>Privacy Policy</p>
                                <p>Terms & Conditions</p>
                            </div>
                        </div>
                        <div className=" max-w-[220px] flex flex-col gap-8">
                            <p className="text-lg font-medium text-gray-900">My Account</p>
                            <div>
                                <p>Infomation</p>
                                <p>Infomation </p>
                                <p>Privacy Policy</p>
                                <p>Terms & Conditions</p>
                            </div>
                        </div>
                        <div className=" max-w-[220px] flex flex-col gap-8">
                            <p className="text-lg font-medium text-gray-900">Our Offers</p>
                            <div>
                                <p>Infomation</p>
                                <p>Infomation </p>
                                <p>Privacy Policy</p>
                                <p>Terms & Conditions</p>
                            </div>
                        </div>
                    </div>

                </div>
            </footer>
        </div>
    )
}

export default footer