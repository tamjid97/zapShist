import React from 'react';
import Bannner from '../Banner/Bannner';
import HowItWorks from '../howItWork/HowItWork';
import Company from '../compay/Company';
import OurServices from '../servise/OurServise';
import Etra1 from '../extra/Etra1';



const Home = () => {
  return (
    <div>
      {/* banner */}
      <div>
        <Bannner/>
      </div>
      {/* how it work */}
      <div>
        <HowItWorks/>
      </div>
      {/* our servise */}
      <div>
      <OurServices/>
      </div>
      {/* compay */}
      <div className='mt-15'>
        <Company/>
      </div>
      {/* etra 1 */}
      <div className='mt-20'>
        <Etra1/>
      </div>

    </div>
  );
};

export default Home;