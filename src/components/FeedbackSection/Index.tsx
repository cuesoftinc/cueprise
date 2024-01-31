"use client"

import React from 'react'
import { FeedbackContainer, FeedbackContent, Feedback } from './FeedbackSection.styles'
import Image from 'next/image'
import user1 from '@/assets/images/user1.png';
import user2 from '@/assets/images/user2.png';
import { IoMdStar } from "react-icons/io";
import { motion } from 'framer-motion';
import { slideInLeft, slideInRight } from "@/lib/motion";

const FeedbackSection = () => {

  const feedbackData = [
    { userImage: user1, 
      userName: 'Ibukun Dairo', 
      rating: 5, 
      content: "”Cueprise has greatly eased my entrepreneurial journey by assisting with paying the salaries of my employees and accepting payments from customers”",
      company: "Cuesoft Inc",
      animation: "slideInLeft"
  },
    { 
      userImage: user2, 
      userName: 'Ibukun Dairo', 
      rating: 4, 
      content: "”Cueprise has greatly eased my entrepreneurial journey by assisting with paying the salaries of my employees and accepting payments from customers”",
      company: "Cuesoft Inc",
      animation: "slideInRight"
  },
  ];

  return (
    <FeedbackContainer>
      <h1 className="title">Review</h1>
      <h2>What Are Our Users Saying About Us</h2>
      <FeedbackContent>
        <Feedback 
          initial="hidden"
          variants={slideInLeft(0.2, 0.8)}
          whileInView="show"
        >
          <div>
            <Image src={user1} alt=''/>
          </div>
          <div className='rating'>
            {Array.from({ length: 5 }).map((_, i) => (
              <IoMdStar key={i} style={{ color: i < 5 ? '#FF9E73' : 'gray', fontSize: '24px' }} />
            ))}
            <h3>”Cueprise has greatly eased my entrepreneurial journey by assisting with paying the salaries of my employees and accepting payments from customers”</h3>
            <div className='user-detail'>
              <p>Ibukun Dairo</p>
              <p>Cuesoft Inc</p>
            </div>
          </div>
        </Feedback>
        <Feedback 
          initial="hidden"
          variants={slideInRight(0.2, 0.8)}
          whileInView="show"
        >
          <div>
            <Image src={user2} alt=''/>
          </div>
          <div className='rating'>
            {Array.from({ length: 5 }).map((_, i) => (
              <IoMdStar key={i} style={{ color: i < 4 ? '#FF9E73' : 'gray', fontSize: '24px' }} />
            ))}
            <h3>”Cueprise has greatly eased my entrepreneurial journey by assisting with paying the salaries of my employees and accepting payments from customers”</h3>
            <div className='user-detail'>
              <p>Ibukun Dairo</p>
              <p>Cuesoft Inc</p>
            </div>
          </div>
        </Feedback>
      </FeedbackContent>
    </FeedbackContainer>
  )
}

export default FeedbackSection
