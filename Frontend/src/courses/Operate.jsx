import React from 'react';
import OperateAbout from '../components/OperateAbout.jsx';
import { motion } from 'framer-motion';
import InfoOp from '../components/InfoOp';
import CTAOp from '../components/CTAOp.jsx';
const Operate = () => {
  return (
    <div>
      <OperateAbout />
      <InfoOp />
      <CTAOp />
    </div>
  );
};

export default Operate;