"use client"

import React from 'react'
import { FeedbackContainer, FeedbackContent, Feedback } from './FeedbackSection.styles'
import Image from 'next/image'
import user1 from '@/assets/images/user1.png';
import user2 from '@/assets/images/user2.png';
import { IoMdStar } from "react-icons/io";

const FeedbackSection = () => {
  const feedbackData = [
    { userImage: user1, 
      userName: 'Ibukun Dairo', 
      rating: 5, 
      content: "”Cueprise has greatly eased my entrepreneurial journey by assisting with paying the salaries of my employees and accepting payments from customers”",
      company: "Cuesoft Inc"
  },
    { 
      userImage: user2, 
      userName: 'Ibukun Dairo', 
      rating: 4, 
      content: "”Cueprise has greatly eased my entrepreneurial journey by assisting with paying the salaries of my employees and accepting payments from customers”",
      company: "Cuesoft Inc"
  },
  ];

  return (
    <FeedbackContainer>
      <h1 className="title">Review</h1>
      <h2>What Are Our Users Saying About Us</h2>

      <FeedbackContent>
        {feedbackData.map((feedback, index) => (
          <Feedback key={index}>
            <div>
              <Image src={feedback.userImage} alt=''/>
            </div>
            <div className='rating'>
              {Array.from({ length: 5 }).map((_, i) => (
                <IoMdStar key={i} style={{ color: i < feedback.rating ? '#FF9E73' : 'gray', fontSize: '24px' }} />
              ))}
              <h3>{feedback.content}</h3>
              <div className='user-detail'>
                <p>{feedback.userName}</p>
                <p>{feedback.company}</p>
              </div>
            </div>
          </Feedback>
        ))}
      </FeedbackContent>
    </FeedbackContainer>
  )
}

export default FeedbackSection
