import React from 'react';
import ShardHeading from '../components/ShardHeding/ShardHeading';
import useData from '../hook/useData';

const Storis = () => {
    const storis = useData();
    console.log(storis)
    return (
        <div >
            <div className='py-8'>
                <ShardHeading h1="What Our Clients Are Saying" p="Real Stroies, Real Results -- Hear From Our Athletes"></ShardHeading>
            </div>
            <div>
                <div className="grid md:grid-cols-2 container bg-[#ebebeb] p-6 rounded-2xl mx-auto px-6  lg:grid-cols-3 gap-6">
                    {
                        storis?.map((s, index) => {
                            return (
                                <div key={index} className="bg-black shadow-lg rounded-2xl p-6">

                                    <h1 className="text-md font-bold text-gray-300 mb-2">{s.title}</h1>


                                    <p className="text-gray-500 text-[12px] mb-6">
                                        {s.review}
                                    </p>

                                    <div className="flex items-center gap-4 mb-4">
                                        <img
                                            src={s.image}
                                            alt={s.name}
                                            className="w-12 h-12 rounded-full object-cover"
                                        />
                                        <div>
                                            <h2 className="font-semibold text-gray-300 text-md">{s.name}</h2>
                                            <div className='flex justify-between items-center gap-30'>
                                                <p className="text-[12px] text-gray-500">{s.designation}</p>
                                                <div className="flex items-center justify-end gap-1">
                                                    <div className="flex text-yellow-500 text-sm">
                                                        {
                                                            [...Array(5)].map((_, i) => {
                                                                const full = i < Math.floor(s.rating);
                                                                const half = i < s.rating && i >= Math.floor(s.rating);

                                                                return (
                                                                    <span key={i}>
                                                                        {full ? "★" : half ? "☆" : "✩"}
                                                                    </span>
                                                                );
                                                            })
                                                        }
                                                    </div>

                                                    {s.reviewsCount && (
                                                        <span className="text-xs text-gray-500">
                                                            ({s.reviewsCount})
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Storis;