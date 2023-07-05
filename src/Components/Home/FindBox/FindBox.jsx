import React from 'react';

const FindBox = () => {
    return (
        <div className=''>
            <form action="">
                <input type="text" placeholder="Where are you going" className="md:w-48 lg:w-52 py-2 m-2 md:m-0 md:border-r-2 border-sky-300 outline-none px-5" />
                <input type="text" placeholder="Check Out" className="md:w-32 lg:w-52 py-2 border-sky-300 border-r-2 outline-none px-5" />
                <input type="text" placeholder="Room" className="md:w-32 lg:w-52 py-2 outline-none md:border-r-2 m-2 md:m-0 border-sky-300 px-5" />
                <input type="text" placeholder="Special Rate" className="md:w-32 lg:w-52 py-2 md:border-r-2 border-sky-300 outline-none px-5" />
                <input type="Submit" value="Book"  className=" bg-gray-600 text-white font-bold py-2 outline-none px-8" />
            </form>



        </div>
    );
};

export default FindBox;