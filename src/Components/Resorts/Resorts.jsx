import React, { useState } from 'react';
import { useLoaderData, Link } from 'react-router-dom';

const Resorts = () => {
    const resorts = useLoaderData()

    console.log(resorts)
    return (
        <div className='mb-10'>
            <h1 className="text-3xl text-center font-sans my-10 font-bold">Select Your Favourite <small className='text-blue-500 text-4xl italic'>{resorts[0].country}'s</small> Resorts</h1>
            <div className='grid md:grid-cols-2 gap-8 grid-cols-1'>
                {resorts.map(rsrt => <Link><div className='relative resort duration-1000'>
                    <div className='w-full h-96'>
                        <img className='h-96 w-full' src={rsrt.img1} alt="" />
                    </div>
                    <div className='absolute  overlay bg-slate-700 py-5 opacity-80 bottom-0 mx-auto w-full text-white '>
                        <h3 className="text-4xl italic p-2  font-bold text-center">{rsrt.resort}</h3>
                        <button className='bg-rose-400 rounded-tl-full rounded-br-full outline-none  text-white font-bold hover:bg-rose-500'> View resorts</button>
                    </div>
                </div></Link>)
                }
            </div>
        </div>
    );
};

export default Resorts;