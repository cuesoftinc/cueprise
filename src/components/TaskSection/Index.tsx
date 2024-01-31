// "use client"

// import Image from 'next/image';
// import React from 'react';
// import TaskManagement1 from '@/assets/images/taskManagement1.png';
// import TaskManagement2 from '@/assets/images/taskManagement2.png';
// import { TaskContainer, OuterImage, SmallerImage } from './TaskSection.styles';
// import { motion } from 'framer-motion';

// const TaskSection = () => {
//   return (
//     <motion.div 
      
//     >
//       <TaskContainer>
//         <div className='text'>
//           <h1>Comprehensive Task Management Hub</h1>
//           <p>Effortlessly track, assign, and monitor tasks for your company, gaining insights into progress and achievement in one unified workspace</p>
//         </div>
//         <div className='img'>
//           <Image alt='' src={TaskManagement1} />
//           <SmallerImage alt='' src="taskManagement2.png" />
//         </div>
//         <OuterImage src="cone.png" alt="cone image"/>
//       </TaskContainer>
//     </motion.div>
//   )
// }

// export default TaskSection

"use client"
import React from 'react';
import {
  SectionContainer,
  InnerContainer,
  ContentWrapper,
  LeftBar,
  RightBar,
  TopImage,
  BottomImage,
  OuterImage
} from './TaskSection.styles';

const index = () => {
  return (
    <SectionContainer>
      <InnerContainer>
        <ContentWrapper>
          <LeftBar>
          <h1>Comprehensive Task Management Hub</h1>
          <p>Effortlessly track, assign, and monitor tasks for your company, gaining insights into progress and achievement in one unified workspace</p>
          </LeftBar>
          <RightBar>
            <TopImage 
              src="taskManagement2.png" 
              alt=""
              variants={{
                start: {
                  opacity: 1,
                  scale: .5,
                },  
                end: {
                  transition:{
                    delay: .4
                  }, 
                  opacity:1,
                  scale: 1,
                },
              }}
              initial="start"
              animate="end"
            />
            <BottomImage src="taskManagement1.png" alt="" />
          </RightBar>
          <OuterImage src="cone.png" alt="cone image"/>
        </ContentWrapper>
      </InnerContainer>
    </SectionContainer>
  )
}

export default index;


