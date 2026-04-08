import React from 'react';

const SubscribeSection = () => {
    return (
        <div className='container mx-auto px-4 sm:px-8 lg:px-16 my-12 sm:my-16 lg:my-20'>
            <div className='bg-black rounded-2xl min-h-[300px] flex flex-col justify-center items-center px-4 sm:px-8 lg:px-16 py-10 text-center'>

                <p className='text-base sm:text-lg lg:text-xl text-gray-400'>
                    Join our community
                </p>

                <h1 className='text-2xl sm:text-3xl lg:text-4xl text-white font-bold py-4 sm:py-5'>
                    Subscribe to our{" "}
                    <span className='underline underline-offset-4 decoration-red-500'>
                        newsletter
                    </span>
                </h1>

                <p className='text-xs sm:text-sm lg:text-base text-gray-400 max-w-2xl'>
                    Join Our Community Of Fitness Enthusiasts And Athletes! By Subscribing To Our Newsletter,
                    You'll Receive Expert Training Tips, Nutrition Guides, Exclusive Discounts,
                    And The Latest News On Upcoming Events And Products.
                </p>

                {/* Form */}
                <div className="w-full flex justify-center mt-6">
                    <form className="flex items-center w-full max-w-xl border-2  border-white rounded-full overflow-hidden shadow-md">

                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-6 py-3 outline-none text-gray-300"
                        />

                        
                            <button
                            type="submit"
                            className="bg-white cursor-pointer hover:bg-gray-100 mr-1 text-black font-semibold lg:px-8 px-2 rounded-full py-2"
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