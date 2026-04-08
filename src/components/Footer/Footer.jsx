import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#FFFFFF]'>
            <div className='container mx-auto px-6 lg:px-16'>

                <div className='border-2 border-gray-300 mb-12'></div>

                {/* Main Footer */}
                <div className='flex flex-col lg:flex-row justify-between gap-10 lg:gap-12'>

                    <div className='text-gray-700'>
                        <h2 className='font-bold mb-5 text-md'>About</h2>

                        <p className='text-sm lg:w-100'>
                            At MuscleForge, we believe in the power of dedication and hard work. Our mission is to provide you with the tools, resources, and community you need to build the body of your dreams
                        </p>

                        <h1 className='border-1 mt-4 border-gray-300 w-35'></h1>

                        <p className='font-bold text-md'>Social Media: Fb In Tw</p>
                    </div>

                    <div className='text-gray-700'>
                        <h2 className='font-bold mb-5 text-md'>Quick Links</h2>
                        <div className='flex flex-col gap-2 text-sm'>
                            <p>Home</p>
                            <p>Our gym location</p>
                            <p>Contact Us</p>
                            <p>Privacy policy</p>
                        </div>
                    </div>

                    <div className='text-gray-700'>
                        <h2 className='font-bold mb-5 text-md'>Our Service</h2>
                        <div className='flex flex-col gap-2 text-sm'>
                            <p>Indoor gym</p>
                            <p>Indoor gym</p>
                            <p>On ground gym</p>
                            <p>Yoga class</p>
                        </div>
                    </div>

                    <div className='text-gray-700'>
                        <h2 className='font-bold mb-5 text-md'>Contact Info</h2>
                        <div className='flex flex-col gap-2 text-sm'>
                            <p>Mail: info@example.com</p>
                            <p>Call: +91 9876543210</p>
                            <p>Location: New York, 235 Lane, 10001</p>
                            <p>Time: Workout Hours: 5AM-8PM</p>
                        </div>
                    </div>

                </div>

                {/* Divider */}
                <div className='flex justify-center mt-10'>
                    <h1 className='border border-gray-300 w-full lg:w-100'></h1>
                </div>

                {/* Bottom Text */}
                <div className='text-gray-400 flex items-center justify-center'>
                    <h1 className='text-sm py-5 text-center'>
                        websitename.com © 2026 all right reserve
                    </h1>
                </div>

            </div>
        </div>
    );
};

export default Footer;