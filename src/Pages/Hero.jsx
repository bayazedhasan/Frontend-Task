
import { Link } from 'react-router';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt } from 'react-icons/fa';
import { GiWeightLiftingUp, GiRunningShoe } from 'react-icons/gi';
import { GrYoga } from 'react-icons/gr';
import { IoIosArrowRoundForward } from 'react-icons/io';

import gymHero from '../../src/assets/gym.png'

const HeroSEcond = () => {
    return (
        <section className="bg-[#ffffff] w-full min-h-[850px] p-4 md:p-6 lg:p-8 flex justify-center items-start font-sans">
            <div className="relative w-full max-w-[1300px] h-[750px] bg-[#0b0c10] rounded-[50px] shadow-2xl">
                <div
                    className="absolute inset-0 lg:left-100 lg:bottom-20 rounded-[50px] bg-cover  lg:bg-contain lg:w-200 bg-center bg-no-repeat opacity-60 pointer-events-none"
                    style={{ backgroundImage: `url(${gymHero})`, filter: 'grayscale(100%) contrast(120%)' }}
                ></div>
                <div className="absolute inset-0 rounded-[50px] bg-gradient-to-t from-[#0b0c10] via-[#0b0c10]/40 to-[#0b0c10] opacity-90 pointer-events-none"></div>
                <div className='hidden lg:block'>
                    <div className=" cutout-logo">
                    <div className="w-[70px] h-[70px] bg-[#7eba33] rounded-full flex flex-wrap items-center justify-center p-[18px]">
                        <div className="w-[45%] h-[45%] border-[2px] border-white rounded-[6px] m-[2.5%]"></div>
                        <div className="w-[45%] h-[45%] border-[2px] border-white rounded-[6px] m-[2.5%]"></div>
                        <div className="w-[45%] h-[45%] border-[2px] border-white rounded-[6px] m-[2.5%]"></div>
                        <div className="w-[45%] h-[45%] border-[2px] border-white rounded-[6px] m-[2.5%]"></div>
                    </div>
                </div>
                </div>
                <div className="cutout-regi">
                    <button className="bg-[#7eba33] hover:bg-[#689c29] transition text-white px-10 py-2 rounded-full font-bold text-xl uppercase w-full max-w-[180px] h-[60px] cursor-pointer">
                        REGI
                    </button>
                </div>
                <div className="cutout-specialty">
                    <div className="w-full h-full bg-[#7eba33] rounded-r-[35px] flex flex-col pt-12 pb-6 px-4 relative overflow-hidden">
                        <div className="absolute top-4 left-4 opacity-40 text-white flex flex-col gap-2 pointer-events-none">
                            <div className="flex gap-2">
                                <div className="w-[12px] h-[6px] border-b-2 border-l-2 border-white rounded-bl-[8px]"></div>
                                <div className="w-[12px] h-[6px] border-b-2 border-l-2 border-white rounded-bl-[8px]"></div>
                                <div className="w-[12px] h-[6px] border-b-2 border-l-2 border-white rounded-bl-[8px]"></div>
                            </div>
                            <div className="flex gap-2 ml-4">
                                <div className="w-[12px] h-[6px] border-b-2 border-l-2 border-white rounded-bl-[8px]"></div>
                                <div className="w-[12px] h-[6px] border-b-2 border-l-2 border-white rounded-bl-[8px]"></div>
                                <div className="w-[12px] h-[6px] border-b-2 border-l-2 border-white rounded-bl-[8px]"></div>
                            </div>
                        </div>

                        <h3 className="text-white font-extrabold text-[15px] mb-6 tracking-wide relative z-10 uppercase mt-4 ml-2">OUR SPECIALTY</h3>

                        <div className="flex flex-col gap-3 relative z-10 w-full px-1">
                            <div className="flex items-center gap-4 border border-white/40 rounded-[20px] p-3 hover:bg-white/10 transition cursor-pointer">
                                <div className="border border-white/50 rounded-[12px] p-2 text-white">
                                    <GiRunningShoe size={26} />
                                </div>
                                <span className="text-white font-semibold text-[13px]">Ground running</span>
                            </div>
                            <div className="flex items-center gap-4 border border-white/40 rounded-[20px] p-3 hover:bg-white/10 transition cursor-pointer">
                                <div className="border border-white/50 rounded-[12px] p-2 text-white">
                                    <GrYoga size={26} />
                                </div>
                                <span className="text-white font-semibold text-[13px]">Yoga Assistance</span>
                            </div>
                            <div className="flex items-center gap-4 border border-white/40 rounded-[20px] p-3 hover:bg-white/10 transition cursor-pointer">
                                <div className="border border-white/50 rounded-[12px] p-2 text-white">
                                    <GiWeightLiftingUp size={26} />
                                </div>
                                <span className="text-white font-semibold text-[13px]">Personal Trainer</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute top-[160px] left-[60px] z-20 flex flex-col gap-4">
                    <div className="flex items-center gap-4 text-white">
                        <span className="text-[13px] font-bold tracking-wide">Follow On:</span>
                        <a href="#" className="hover:text-[#7eba33] transition"><FaFacebookF size={15} /></a>
                        <a href="#" className="hover:text-[#7eba33] transition"><FaInstagram size={15} /></a>
                        <a href="#" className="hover:text-[#7eba33] transition font-light text-[18px] leading-none mb-[2px]">X</a>
                        <a href="#" className="hover:text-[#7eba33] transition"><FaLinkedinIn size={15} /></a>
                    </div>
                    <div className="flex flex-col gap-3 opacity-30 px-2 mt-2 pointer-events-none">
                        <div className="flex gap-4">
                            <div className="w-[14px] h-[8px] border-b-4 border-l-4 border-white/60 rounded-bl-[10px]"></div>
                            <div className="w-[14px] h-[8px] border-b-4 border-l-4 border-white/60 rounded-bl-[10px]"></div>
                            <div className="w-[14px] h-[8px] border-b-4 border-l-4 border-white/60 rounded-bl-[10px]"></div>
                        </div>
                        <div className="flex gap-4 ml-6">
                            <div className="w-[14px] h-[8px] border-b-4 border-l-4 border-white/60 rounded-bl-[10px]"></div>
                            <div className="w-[14px] h-[8px] border-b-4 border-l-4 border-white/60 rounded-bl-[10px]"></div>
                            <div className="w-[14px] h-[8px] border-b-4 border-l-4 border-white/60 rounded-bl-[10px]"></div>
                        </div>
                        <div className="flex gap-4 ml-12">
                            <div className="w-[14px] h-[8px] border-b-4 border-l-4 border-white/60 rounded-bl-[10px]"></div>
                            <div className="w-[14px] h-[8px] border-b-4 border-l-4 border-white/60 rounded-bl-[10px]"></div>
                            <div className="w-[14px] h-[8px] border-b-4 border-l-4 border-white/60 rounded-bl-[10px]"></div>
                        </div>
                    </div>
                </div>
                <div className="absolute top-[160px] right-[80px] z-20 opacity-30 pointer-events-none">
                    <div className="flex flex-col gap-3 items-end">
                        <div className="flex gap-3">
                            <div className="w-[14px] h-[8px] border-b-4 border-l-4 border-white/70 rounded-bl-[10px]"></div>
                            <div className="w-[14px] h-[8px] border-b-4 border-l-4 border-white/70 rounded-bl-[10px]"></div>
                        </div>
                        <div className="flex gap-3">
                            <div className="w-[14px] h-[8px] border-b-4 border-l-4 border-white/70 rounded-bl-[10px]"></div>
                            <div className="w-[14px] h-[8px] border-b-4 border-l-4 border-white/70 rounded-bl-[10px]"></div>
                            <div className="w-[14px] h-[8px] border-b-4 border-l-4 border-white/70 rounded-bl-[10px]"></div>
                        </div>
                        <div className="flex gap-3 pr-[14px]">
                            <div className="w-[14px] h-[8px] border-b-4 border-l-4 border-white/70 rounded-bl-[10px]"></div>
                            <div className="w-[14px] h-[8px] border-b-4 border-l-4 border-white/70 rounded-bl-[10px]"></div>
                        </div>
                    </div>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pt-40 pointer-events-none">
                   <div className='hidden md:block'>
                     <h1 className="flex flex-col items-center leading-[1.2] ml-80  mt-40 font-black pointer-events-auto">
                        <span className="text-[60px] md:text-[80px] lg:text-[100px] text-outline tracking-wider font-bold">
                            POWER YOUR
                        </span>
                        <span className="text-[60px] md:text-[80px] lg:text-[110px] text-split tracking-[0.05em] mt-[-10px] sm:mt-[-20px]">
                            PONTETIALE
                        </span>
                    </h1>
                   </div>
                    <div className="flex items-center justify-center gap-6 mt-123 lg:mt-12 pointer-events-auto">
                        <Link to="/shop" className="border border-white rounded-[16px] px-8 py-3 h-[50px] bg-transparent text-white uppercase text-[15px] font-medium tracking-[2px] transition-all hover:bg-white hover:text-black hover:scale-105 flex items-center justify-center gap-4">
                            SHOP NOW
                            <IoIosArrowRoundForward size={24} />
                        </Link>
                        <button className="border border-white rounded-[16px] w-[50px] h-[50px] flex items-center justify-center bg-transparent text-white hover:bg-white hover:text-black hover:scale-105 transition-all">
                            <FaMapMarkerAlt size={18} />
                        </button>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default HeroSEcond;
