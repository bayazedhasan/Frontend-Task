import React, { useEffect, useState } from 'react';
import { FaStar, FaPlus } from "react-icons/fa";
import { motion } from "framer-motion";
import ShardHeading from '../components/ShardHeding/ShardHeading';

const ProductCard = () => {
    const [chocklels, setChocklets] = useState([]);
    useEffect(() => {
        fetch("/chockletCard.json")
            .then(res => res.json())
            .then(data => setChocklets(data))
    }, [])
    return (
        <div>
            <div>
                <ShardHeading h1="Our Products" p="Fuel Your Workouts with Protein-Packed Nutrition"></ShardHeading>
            </div>
            <div className=" px-6 py-12">
                <div className="container mx-auto grid md:grid-cols-3 sm:grid-cols-2 gap-8">
                    {chocklels.map((item, i) => (
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                            key={item.id}
                            className="bg-[#0F0F0F] rounded-3xl p-5 shadow-lg hover:scale-105 transition duration-300"
                        >
                            <div className="rounded-xl overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-60 object-cover"
                                />
                            </div>
                            <div className="mt-4 text-white">
                                <h3 className="text-sm text-gray-200">{item.name}</h3>

                                <div className="flex items-center justify-between mt-2">
                                    <div className='flex items-center gap-5'>
                                        <p className="font-semibold text-lg">${item.price}.00</p>
                                        <div className="flex">
                                            {[...Array(5)].map((_, i) => (
                                                <FaStar
                                                    key={i}
                                                    className={`text-sm ${i < item.rating ? "text-yellow-500" : "text-gray-600"
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    <button className="bg-[#57b233] p-3 rounded-xl hover:bg-[#57b233]">
                                        <FaPlus />
                                    </button>
                                </div>


                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;