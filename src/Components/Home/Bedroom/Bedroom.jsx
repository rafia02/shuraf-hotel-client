import React from 'react';
import { Link } from 'react-router-dom';
import '../../../App.css'

const Bedroom = () => {
    return (
        <div className='bg-neutral-100 pt-1 px-3'>
            <div>
                <h1 className=' text-3xl md:text-4xl font-bold font-serif text-center p-5 mt-10'>OUR BEDROOMS AND SUITES</h1>
                <div className='w-3/5 mx-auto'>
                    <p className='text-center text-lg mb-10 font-serif opacity-80 '>Airy and welcoming, each room is a balance of private space and open design, featuring natural materials interpreted with sophisticated style. A comfortable and considered space that allows you to focus, relax, and be yourself.</p>

                </div>
            </div>




            <div>


                <div className='flex flex-col md:flex-row  mb-32  '>
                    <div className='flex flex-col border w-full md:w-7/12 bg-white  '>
                        <div className='relative  room-img room-style md:h-[400px] h-60'>
                            <div className='absolute bottom-5 right-5 '>
                                <button className='bg-rose-400 rounded-tl-full rounded-3xl text-white font-bold hover:bg-rose-500'> BOOK NOW</button>
                            </div>

                        </div>
                        <div className=' flex my-5 items-start justify-between px-4 '>
                            <div>
                                <h1 className="text-2xl  text-start font-bold">ROMANCE PACKAGE</h1>
                            </div>
                            <div>
                                <p className='underline underline-offset-8 text-start decoration-stone-200   '>King platform bed, optional twin trundle</p>
                                <p className='underline underline-offset-8 text-start  decoration-stone-200  my-2'>Walk in shower with separate water closet</p>
                                <p className='text-start underline underline-offset-8  decoration-stone-200  my-2'>2-3 people</p>
                                <p className='text-start mt-5'>
                                    <Link className='text-neutral-600  font-bold font-serif duration-500 hover:text-rose-400 mr-10 underline underline-offset-8  decoration-rose-400  '>Learn More</Link>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='w-full ml-0 md:ml-10 lg:ml-28 md:w-5/12 mt-14 bg-emerald-50 h-96 border-4 '>
                        <div className='w-full  '>
                            <img className='h-60 w-full' src="https://hotelvt.com/wp-content/uploads/2021/02/HVT0002_0863-300x200.jpg" alt="" />

                        </div>
                        <div className='my-5 font-serif '>
                            <h1 className="text-2xl font-bold ">ROMANCE PACKAGE</h1>
                            <div className='mt-8 '>
                                <Link className='text-stone-500 font-bold font-serif duration-500 hover:text-green-600 mr-10 underline underline-offset-8  decoration-green-600  '>Learn More</Link>
                                <Link className='text-stone-500 font-bold font-serif duration-500 hover:text-green-600 mr-10 underline underline-offset-8  decoration-green-600  '>See All Packages</Link>
                            </div>
                        </div>
                    </div>
                </div>



                <div className='flex flex-col mb-32   md:flex-row-reverse '>
                    <div className='flex flex-col border w-full md:w-7/12 bg-white  '>
                        <div className='relative room-img2 room-style md:h-[400px] h-60'>
                            <div className='absolute bottom-5 right-5 '>
                                <button className='bg-rose-400 rounded-tl-full  rounded-3xl text-white font-bold hover:bg-rose-500 '> BOOK NOW</button>
                            </div>

                        </div>
                        <div className=' flex my-5 items-start justify-between px-4 '>
                            <div>
                                <h1 className="text-2xl text-start   font-bold">QUEEN & DOUBLE BEDROOM</h1>
                            </div>
                            <div>
                                <p className='underline underline-offset-8 text-start decoration-stone-200   '>1 Queen and 1 Double platform bed</p>
                                <p className='underline underline-offset-8  text-start decoration-stone-200  my-2'>Full bath with soaking tub</p>
                                <p className='text-start underline underline-offset-8  decoration-stone-200  my-2'>2-4 people</p>
                                <p className='text-start mt-5'>
                                    <Link className='text-neutral-600  font-bold font-serif duration-500 hover:text-rose-400 mr-10 underline underline-offset-8  decoration-rose-400  '>Learn More</Link>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='w-full room3 relative    h-96 mr-0 md:mr-10 lg:mr-28 md:w-5/12 mt-14 bg-emerald-50   '>
                       

                    <div className='absolute  bottom-32 right-5 '>
                                <span className='outline-title text-4xl  md:text-5xl italic  font-bold '>Relax &amp; rejuvenate with us</span>
                            </div>

                     

                       
                    </div>
                </div>




                <div className='flex flex-col md:flex-row  mb-32  '>
                    <div className='flex flex-col border w-full md:w-7/12 bg-white  '>
                        <div className='relative rom4 md:h-[400px] h-60'>
                            <div className='absolute bottom-5 right-5 '>
                                <button className='bg-rose-400 rounded-tl-full rounded-3xl text-white font-bold hover:bg-rose-500'> BOOK NOW</button>
                            </div>

                        </div>
                        <div className=' flex my-5   px-4 '>
                            <div>
                                <h1 className="text-2xl text-start  font-bold">WHIRLPOOL KING BEDROOM</h1>
                            </div>
                            <div>
                                <p className='underline underline-offset-8 text-start decoration-stone-200   '>King platform bed</p>
                                <p className='underline underline-offset-8 text-start  decoration-stone-200  my-2'>Jetted Whirlpool tub with walk-in stone</p>
                                <p className='text-start underline underline-offset-8  decoration-stone-200  my-2'>2-3 people</p>
                                <p className='text-start mt-5'>
                                    <Link className='text-neutral-600  font-bold font-serif duration-500 hover:text-rose-400 mr-10 underline underline-offset-8  decoration-rose-400  '>Learn More</Link>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='w-full ml-0 md:ml-10 lg:ml-28 md:w-5/12 mt-14 bg-emerald-50 h-96 border-4 '>
                        <div className='w-full  '>
                            <img className='h-60 w-full' src="https://hotelvt.com/wp-content/uploads/2021/04/High-Above-Vermont-Hotel-Vermont-14-768x542.jpg" alt="" />

                        </div>
                        <div className='my-5 font-serif '>
                            <h1 className="text-2xl font-bold ">STORIES OF VERMONT</h1>
                            <div className='mt-8 '>
                                <Link className='text-stone-500 font-bold font-serif duration-500 hover:text-green-600 mr-10 underline underline-offset-8  decoration-green-600  '>Learn More</Link>
                               
                            </div>
                        </div>
                    </div>
                </div>





                <div className='flex flex-col md:flex-row-reverse   '>
                    <div className='flex flex-col border w-full md:w-7/12 bg-white  '>
                        <div className='relative rom4 md:h-[400px] h-60'>
                            <div className='absolute bottom-5 right-5 '>
                                <button className='bg-rose-400 rounded-tl-full rounded-3xl text-white font-bold hover:bg-rose-500'> BOOK NOW</button>
                            </div>

                        </div>
                        <div className=' flex my-5   px-4 '>
                            <div>
                                <h1 className="text-2xl text-start  font-bold">WHIRLPOOL KING BEDROOM</h1>
                            </div>
                            <div>
                                <p className='underline underline-offset-8 text-start decoration-stone-200   '>King platform bed</p>
                                <p className='underline underline-offset-8 text-start  decoration-stone-200  my-2'>Jetted Whirlpool tub with walk-in stone</p>
                                <p className='text-start underline underline-offset-8  decoration-stone-200  my-2'>2-3 people</p>
                                <p className='text-start mt-5'>
                                    <Link className='text-neutral-600  font-bold font-serif duration-500 hover:text-rose-400 mr-10 underline underline-offset-8  decoration-rose-400  '>Learn More</Link>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='w-full hover:scale-105 duration-500 mr-0 md:mr-10 lg:mr-28 md:w-5/12 mt-14 bg-emerald-50 h-96 border-4 '>
                    
                            <img className='h-full w-full' src="https://hotelvt.com/wp-content/uploads/2018/07/Mt.-Philo-Detail-Image-768x542.jpg" alt="" />

                     
                    </div>
                </div>






            </div>



        </div>
    );
};

export default Bedroom;