import React from 'react';
import ShardHeading from '../components/ShardHeding/ShardHeading';
import { FaPlay } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Train = () => {
    return (
        <div>
            <div className='py-8'>
                <ShardHeading
                    h1="Train Like a Champion"
                    p="Unleash Your Power with Expert Boxing Training"
                />
            </div>
            <div className='container mx-auto px-6 bg-black p-6 rounded-3xl flex flex-col lg:flex-row lg:justify-between lg:items-center gap-10'>

                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className='w-full lg:w-auto flex justify-center lg:justify-start'
                >
                    <img
                        className='rounded-xl w-full max-w-md lg:w-100'
                        src={'https://i.postimg.cc/y8fjjgR7/serm-prime-desktop-107011958a.jpg'}
                        alt="Trainer"
                    />
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    className='w-full lg:w-1/3'
                >
                    <h1 className='text-xl pb-6 text-white font-bold'>
                        Training Focus Areas:
                    </h1>

                    <h2 className='text-md text-gray-300 py-2'>Strength & Conditioning</h2>
                    <p className='text-sm text-gray-500 pb-5'>
                        Develop knockout power with a mix of strength training and explosive movements.
                    </p>

                    <h2 className='text-md text-gray-300 pb-2'>Speed & Agility</h2>
                    <p className='text-sm text-gray-500 pb-5'>
                        Sharpen your reflexes and footwork with dynamic drills that improve speed and coordination.
                    </p>

                    <h2 className='text-md text-gray-300 pb-2'>Endurance Training</h2>
                    <p className='text-sm text-gray-500 pb-5'>
                        Boost your stamina with high-intensity circuits that keep you fighting strong till the final round.
                    </p>
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                    className='w-full lg:w-1/3'
                >
                    <h1 className='text-xl pb-6 text-white font-bold'>
                        Why Train With Us:
                    </h1>

                    <h2 className='text-md text-gray-300 py-2'>Expert Coaches</h2>
                    <p className='text-sm text-gray-500 pb-5'>
                        Our experienced boxing trainers have worked with amateur and professional athletes.
                    </p>

                    <h2 className='text-md text-gray-300 pb-2'>Flexible Programs</h2>
                    <p className='text-sm text-gray-500 pb-7'>
                        Whether you're a beginner or seasoned boxer, we offer flexible programs.
                    </p>

                    <div className='flex gap-5 sm:gap-10 items-start sm:items-center'>
                        <div className='border rounded-2xl bg-[#57b233] px-8 py-4 cursor-pointer'>
                            <button className='text-white font-semibold cursor-pointer'>
                                Punch Now
                            </button>
                        </div>

                        <div className='border rounded-full border-dashed border-[#57b233] p-5 w-fit'>
                            <FaPlay className='cursor-pointer' color='#57b233' size={24} />
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default Train;