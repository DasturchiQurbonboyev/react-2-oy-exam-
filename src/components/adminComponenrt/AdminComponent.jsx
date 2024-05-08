import React from 'react'
import { useNavigate } from 'react-router-dom'

const AdminComponent = () => {

    const navigate = useNavigate();

    const remov = () => {
        localStorage.removeItem("token");
        navigate("/");
    }


    return (
        <div className='kontainer'>
            <h1 className='text-[40px] font-[500] mb-[40px]      '>Admin panel</h1>
            <div className='flex flex-col gap-7'>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur cupiditate inventore, deserunt magnam provident dolores blanditiis ullam iusto! Assumenda dolor quis itaque commodi tempore laudantium quam deleniti id consequatur. Minus delectus officia unde quam nulla ut. Odit quibusdam quis aut enim delectus blanditiis, quisquam quidem maiores suscipit. Dignissimos, ut repudiandae!
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur cupiditate inventore, deserunt magnam provident dolores blanditiis ullam iusto! Assumenda dolor quis itaque commodi tempore laudantium quam deleniti id consequatur. Minus delectus officia unde quam nulla ut. Odit quibusdam quis aut enim delectus blanditiis, quisquam quidem maiores suscipit. Dignissimos, ut repudiandae!
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur cupiditate inventore, deserunt magnam provident dolores blanditiis ullam iusto! Assumenda dolor quis itaque commodi tempore laudantium quam deleniti id consequatur. Minus delectus officia unde quam nulla ut. Odit quibusdam quis aut enim delectus blanditiis, quisquam quidem maiores suscipit. Dignissimos, ut repudiandae!
                </p>
            </div>
            <div className='mt-[47px]'>
                <button onClick={remov} className='bg-[#33A0FF] text-white  w-[220px]  py-3 rounded-md font-[600]  '>Log out</button>
            </div>
        </div>
    )
}

export default AdminComponent