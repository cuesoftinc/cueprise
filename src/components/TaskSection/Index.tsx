"use client"

import Image from 'next/image';
import React from 'react';
import TaskManagement from '@/assets/images/taskManagement.png';
import { TaskContainer } from './TaskSection.styles';

const TaskSection = () => {
  return (
    <TaskContainer>
      <div className='text'>
        <h1>Comprehensive Task Management Hub</h1>
        <p>Effortlessly track, assign, and monitor tasks for your company, gaining insights into progress and achievement in one unified workspace</p>
      </div>
      <div className='img'>
        <Image alt='' src={TaskManagement} />
      </div>
    </TaskContainer>
  )
}

export default TaskSection
