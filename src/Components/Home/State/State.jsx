import { data } from 'autoprefixer';
import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom'



const State = () => {



    const { data: statesName = [], isLoading } = useQuery({
        queryKey: ["contry"],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/countries')
            const data = await res.json()
            return data;
        }
    })






    return (
        <div className='mt-20'>

            <div>
                <h1 className="text-2xl md:text-4xl font-serif text-center font-bold">SELECT YOUR FEVOURITE STATE</h1>
                <div className='w-4/5 mx-auto'>
                    <p className='text-center my-5  mb-10 font-serif opacity-80 '>You have to choose your state and booking your favourite resort. Every state has many beautiful resort. You must be booking your favourite resort and enjoy your holiday. Spend a emjoyful day in your holiday with your family. </p>
                </div>
            </div>


            <div className='grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-5'>
                {
                    statesName.map(state => <div key={state.id}>

                        <div className='state-style relative'>
                            <Link to={`/resorts/${state.country}`}>
                                <img className='h-64' src={state.img} alt="" />
                            
                            <div className='absolute  overlay bottom-5 right-3 font-bold text-white'>
                                <h5 className='text-xl italic mb-1 '>{state.country}</h5>
                                <div className=''>
                                    <button className='bg-rose-400 rounded-tl-full outline-none  text-white font-bold hover:bg-rose-500'> View resorts</button>
                                </div>
                            </div>
                            </Link>
                        </div>

                    </div>)
                }
            </div>


        </div>
    );
};

export default State;