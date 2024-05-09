import axios from 'axios';
import React, { useState } from 'react'
import { FaEyeSlash, FaRegEye } from 'react-icons/fa';
import Loading from '../loading/Loading';



const API_URL = "https://dummyjson.com/auth/login";


const LogInComponent = () => {


    const [username, setUsername] = useState("atuny0");
    const [password, setPassword] = useState("9uQFF1Lh");
    const [loading, setLoading] = useState(false)
    const [showpassword, setShowpassword] = useState(false)



    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)


        e.preventDefault()
        setLoading(true)

        if (!username.trim() || !password.trim()) {
            return toast.warn("Iltimos ma'lumotni to'ldiring")
        }

        axios
            .post(API_URL, { username, password })
            .then((response) => {
                const data = response.data;
                console.log(data);
                if (data.message === "Error") {
                    toast.error("Username or Password is incorrect");
                } else {
                    localStorage.setItem("token", data.token);
                    window.open("/admin", "_self");
                    toast.success('Successfully created!');
                }
            })
            .catch((error) => {
                toast.error("Username or Password is incorrect");
            })
            .finally(() => setLoading(false))


    }


    if (loading) {
        return <Loading />
    }


    return (
        <form onSubmit={handleSubmit} className='mx-auto  max-[600px]:px-[20px]  min-[600px]:w-[500px] flex flex-col gap-7'>
            <div>
                <label htmlFor="">Username</label>
                <br />
                <input value={username} onChange={e => setUsername(e.target.value)} className='p-[15px] w-full rounded-md  border outline-none focus:border-[#33A0FF]' type="text" />
            </div>
            <div >
                <label htmlFor="">Password</label>
                <br />
                <div className='flex p-[15px] w-full rounded-md  border  focus:border-[#33A0FF]'>
                    <input className='outline-none w-full' value={password} onChange={e => setPassword(e.target.value)} type={`${!showpassword ? "password" : "text"}`} />
                    <button type='button' className='outline-none' onClick={() => setShowpassword(p => !p)}>
                        {password ? (showpassword ? <FaEyeSlash /> : <FaRegEye />) : <></>}
                    </button>
                </div>
            </div>
            <div >
                {loading ? <button disabled={loading} type="button" className='w-full bg-[#33A0FF] text-white font-[600] py-[20px] px-[40px] rounded-md outline-none     '>
                    <svg aria-hidden="true" role="status" className=' w-full bg-[#33A0FF] text-white font-[600] py-[20px] px-[40px] rounded-md outline-none     ' viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"></path>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"></path>
                    </svg>
                    Loading...
                </button> :
                    <button className='w-full bg-[#33A0FF] text-white font-[600] py-[20px] px-[40px] rounded-md outline-none     '>Log In </button>
                }
            </div>
        </form>
    )
}

export default LogInComponent