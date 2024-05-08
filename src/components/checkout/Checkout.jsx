import React, { useState } from 'react';
import { BsPaypal } from 'react-icons/bs';
import { CiBank, CiCreditCard1 } from 'react-icons/ci';
import { IoMdArrowBack } from 'react-icons/io'
import { IoClose } from 'react-icons/io5'
import PhoneInput from 'react-phone-number-input/input';

const BOT_TOKEN = "7159700440:AAG5TlB8IkrP95oMnaJbPpvmLYpf-QIeJTg"
const USR_ID = "5661686916"
const CHAT_ID = "-1002082517225"

//  Get updates: https://api.telegram.org/bot7159700440:AAG5TlB8IkrP95oMnaJbPpvmLYpf-QIeJTg/getUpdates

//    https://api.telegram.org/bot[your_token]/sendMessage?chat_id=[your chat_id]



const Checkout = ({ checkout, setCheckout }) => {

    let maxsulot = ""

    let product = checkout?.map((el) => (
        maxsulot += ", " + el.title
    ))
    maxsulot = maxsulot.slice(2)


    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")

    const handlePayment = () => {
        console.log(phone);
        if (!firstName || !lastName || !email || !address || !phone) {
            alert('Iltimos, barcha maydonlarni to\'ldiring.');
            return;
        }

        let text = "Buyrutmalar! %0A%0A"
        text += `FISH:   ${firstName}  ${lastName}%0A`
        text += `Address: ${address}%0A`
        text += `Phone ${phone} %0A`
        text += `Email: ${email} %0A`
        let url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}`
        let api = new XMLHttpRequest()
        api.open("GET", url, true)
        api.send()
    }


    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

    const handlePaymentMethodChange = (methodId) => {
        setSelectedPaymentMethod(methodId);
    };

    return (
        <div className=' flex justify-center items-center filter  h-[100vh] w-[100%] checkout top-0'>
            <div className=' fixed z-10 bg-white top-[10%] w-[1000px] p-[50px] rounded-xl '>
                <div className='flex items-center justify-start'>
                    <IoMdArrowBack onClick={() => setCheckout(null)} className='text-[#40BFFF] cursor-pointer size-8  ' />
                </div>
                <div className='flex items-center justify-end'>
                    <IoClose onClick={() => setCheckout(null)} className='text-[#40BFFF]  cursor-pointer    size-14 ' />
                </div>
                <h2 className='text-[#40BFFF] mb-[50px] text-[32px] font-[600] text-center   '>Make Payment</h2>
                <div className='grid grid-cols-2 gap-5'>
                    <div className='flex flex-col gap-3'>
                        <div className='flex flex-col gap-4'>
                            <input value={firstName} onChange={e => setFirstName(e.target.value)} required className='outline-none  p-[15px] rounded-md  bg-[#DFDEDE]    ' type="text" placeholder='First Name' />
                            <input value={email} onChange={e => setEmail(e.target.value)} required className='outline-none  p-[15px] rounded-md  bg-[#DFDEDE]    ' type="email" placeholder='Email Address' />
                        </div>
                        <h3 className='text-[20px] text-[#40BFFF] font-[600]     '>Select Method of Payment</h3>
                        <div className='flex flex-col gap-4'>
                            <div className={`flex items-center  justify-between border  px-[15px] py-[15px] bg-[#DFDEDE] rounded-md ${selectedPaymentMethod === '1' ? 'bg-[#40BFFF]' : ''}`} onClick={() => handlePaymentMethodChange('1')} >
                                <div className='flex items-center gap-3'>
                                    <CiCreditCard1 className='text-[#40BFFF]  size-[25px]  ' />
                                    <p className='text-[#223263] text-[15px] font-[700]     '>Credit Card Or Debit</p>
                                </div>
                                <input
                                    className='size-[20px]'
                                    type="checkbox"
                                    id="1"
                                    value="1"
                                    checked={selectedPaymentMethod === '1'}
                                    onChange={() => handlePaymentMethodChange('1')}
                                />
                            </div>
                            <div className={`flex items-center  justify-between border  px-[15px] py-[15px] bg-[#DFDEDE] rounded-md ${selectedPaymentMethod === '2' ? 'bg-[#40BFFF]' : ''}`} onClick={() => handlePaymentMethodChange('2')}>
                                <div className='flex items-center gap-3'>
                                    <BsPaypal className='text-[#40BFFF]  size-[25px]  ' />
                                    <p className='text-[#223263] text-[15px] font-[700]     '>Paypal</p>
                                </div>
                                <input
                                    className='size-[20px]'
                                    type="checkbox"
                                    id="2"
                                    value="2"
                                    checked={selectedPaymentMethod === '2'}
                                    onChange={() => handlePaymentMethodChange('2')}
                                />
                            </div>
                            <div className={`flex items-center  justify-between border  px-[15px] py-[15px] bg-[#DFDEDE] rounded-md ${selectedPaymentMethod === '3' ? 'bg-[#40BFFF]' : ''}`} onClick={() => handlePaymentMethodChange('3')}>
                                <div className='flex items-center gap-3'>
                                    <CiBank className='text-[#40BFFF]  size-[25px]  ' />
                                    <p className='text-[#223263] text-[15px] font-[700]     '>Bank Transfer</p>
                                </div>
                                <input
                                    className='size-[20px]'
                                    type="checkbox"
                                    id="3"
                                    value="3"
                                    checked={selectedPaymentMethod === '3'}
                                    onChange={() => handlePaymentMethodChange('3')}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[20px]'>
                        <input value={lastName} onChange={e => setLastName(e.target.value)} required className='outline-none  p-[15px] rounded-md  bg-[#DFDEDE]    ' type="text" placeholder='Last Name' />
                        <textarea value={address} onChange={e => setAddress(e.target.value)} required className='outline-none p-[15px] resize-none h-[120px] rounded-md  bg-[#DFDEDE]    ' placeholder={"Address for Delivery"} name="" id=""></textarea>
                        <PhoneInput
                            className='outline-none p-[15px] resize-none  rounded-md  bg-[#DFDEDE]    '
                            placeholder="Enter phone number"
                            value={phone}
                            onChange={setPhone} />
                        {/* <input value={phone} onChange={e => setPhone(e.target.value)} required className='outline-none  p-[15px] rounded-md  bg-[#DFDEDE]    ' type="tel" placeholder='Mobile Phone' pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" /> */}
                    </div>
                </div>
                <div className='flex justify-center items-center mt-8'>
                    <button onClick={() => handlePayment()} className='px-[45px] rounded-xl text-white font-[700] py-[18px]  bg-[#33A0FF]'>Go to Payment</button>
                </div>
            </div>
        </div>
    )
}

export default Checkout;
