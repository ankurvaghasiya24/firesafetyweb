import React from 'react';
import HomeHerosection from '../components/home/HomeHerosection';
import Mission from '../components/home/Mission';
import StatewiseClients from '../components/home/StatewiseClients';
import HomeService from '../components/home/HomeService';

function Home() {
  return (
    <div>
       <HomeHerosection />
       <Mission />
       <StatewiseClients />
       <HomeService />
    </div>
  );
}

export default Home;
