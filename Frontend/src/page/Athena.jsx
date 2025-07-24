import React from 'react'
import HeroLMS from '../components/HeroLMS';
import FeaturesLMS from '../components/FeaturesLMS';
import LMSAbout from '../components/LMSAbout';
import LMSCTA from '../components/LMSCTA';
import LMSHowItWorks from '../components/LMSHowItWorks';

const Athena = () => {
  return (
    <div>
        <HeroLMS/>
        <LMSAbout/>
        <FeaturesLMS/>
        <LMSHowItWorks/>
        <LMSCTA/>
    </div>
  );
};
export default Athena;
