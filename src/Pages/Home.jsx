import React from 'react';
import SubscribeSection from './SubscribeSection';
import ShardHeading from '../components/ShardHeding/ShardHeading';
import Storis from './Storis';
import Train from './Train';

const Home = () => {
    return (
        <div>
            <Train></Train>
            <Storis></Storis>
            <SubscribeSection></SubscribeSection>
        </div>
    );
};

export default Home;