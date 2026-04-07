import React from 'react';

const SubscribeSection = () => {
    return (
        <div className='container mx-auto px-16 my-20'>
            <div className='bg-black rounded-2xl h-100 flex flex-col justify-center items-center'>
                <p className='text-xl text-gray-400 '>Join our community</p>
                <h1 className='text-3xl text-[#FFFFFF] font-bold py-5'>Subscribe to our <span className=' underline underline-offset-7 decoration-red-500'>newslatter</span></h1>
                <p className='text-center text-sm w-180 text-gray-400'>Join Our Community Of Fitness Enthusiasts And Athletes! By Subscribing To Our Newsletter, You'll Receive Expert Training Tips. Nutrition Guides, Exclusive Discounts. And The Latest News On Upcoming Events And Products.</p>
                <div className="flex justify-center items-center w-140 mt-5">
                    <form
                        className="flex items-center w-full max-w-2xl shadow-md rounded-full overflow-hidden border border-gray-300"
                    >
                        <input
                            type="email"
                            placeholder="Enter your Email"
                            className="w-108 px-8 py-3.5 outline-none text-gray-100"
                        />

                        <button
                            type="submit"
                            className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold px-6 py-2 rounded-full"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SubscribeSection;