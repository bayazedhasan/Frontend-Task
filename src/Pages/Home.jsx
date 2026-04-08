import React from 'react';
import SubscribeSection from './SubscribeSection';
import ShardHeading from '../components/ShardHeding/ShardHeading';
import Storis from './Storis';
import Train from './Train';
import ProductCard from './ProductCard';
import Hero from './Hero';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <ProductCard></ProductCard>
            <Train></Train>
            <Storis></Storis>
            <SubscribeSection></SubscribeSection>
        </div>
    );
};

export default Home;