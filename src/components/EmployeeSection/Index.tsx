"use client"

import Image from 'next/image';
import React from 'react';
import EmployeeStatistics from '@/assets/images/employeeStatistics.png'
import { EmployeeContainer } from './EmployeeSection.styles';

const EmployeeSection = () => {
  return (
    <EmployeeContainer>
      <div className='text'>
        <h1>Employee Statistics</h1>
        <p>These statistics provide insights into various aspects of employee demographics, performance, and engagement.</p>
      </div>
      <div className='img'>
        <Image alt='' src={EmployeeStatistics} />
      </div>
    </EmployeeContainer>
  )
}

export default EmployeeSection
