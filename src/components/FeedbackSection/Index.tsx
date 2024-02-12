"use client"

import React from 'react'
import { FeedbackContainer, FeedbackContent, Feedback } from './FeedbackSection.styles'
import Image from 'next/image'
import user1 from '@/assets/images/user1.png';
import user2 from '@/assets/images/user2.png';
import opeyemi from '@/assets/images/opeyemi-dairo.jpg'
import { IoMdStar } from "react-icons/io";
import { motion } from 'framer-motion';
import { slideInLeft, slideInRight } from "@/lib/motion";

const FeedbackSection = () => {

  const feedbackData = [
    { userImage: user1, 
      userName: 'David Olawepo', 
      rating: 5, 
      content: "”As a busy man running a business, I have always struggled with Inventory Management. Coming in contact with Cueprise revolutionized that for me as the seamlessness with which I can keep track of, when and how my stock moves from place to place is a game changer.”",
      company: "HibiK",
      animation: "slideInLeft"
  },
    { 
      userImage: opeyemi, 
      userName: 'Opeyemi Oluleye', 
      rating: 4, 
      content: "”Cueprise has changed how I handle payroll. I used to have to make multiple deposit slips and bank visits, but with Cueprise, I can say it has solved this issue, saving countless hours wasted on payroll management and improved employee morale due to timely pay.”",
      company: "Ayooni Beauty Store",
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
            <h3>”As a busy man running a business, I have always struggled with Inventory Management. Coming in contact with Cueprise revolutionized that for me as the seamlessness with which I can keep track of, when and how my stock moves from place to place is a game changer.”</h3>
            <div className='user-detail'>
              <p>David Olawepo</p>
              <p>HibiK</p>
            </div>
          </div>
        </Feedback>
        <Feedback 
          initial="hidden"
          variants={slideInRight(0.2, 0.8)}
          whileInView="show"
        >
          <div>
            <Image src={opeyemi} alt='' width={250} height={250} />
          </div>
          <div className='rating'>
            {Array.from({ length: 5 }).map((_, i) => (
              <IoMdStar key={i} style={{ color: i < 4 ? '#FF9E73' : 'gray', fontSize: '24px' }} />
            ))}
            <h3>”Cueprise has changed how I handle payroll. I used to have to make multiple deposit slips and bank visits, but with Cueprise, I can say it has solved this issue, saving countless hours wasted on payroll management and improved employee morale due to timely pay.”</h3>
            <div className='user-detail'>
              <p>Opeyemi Oluleye</p>
              <p>Ayooni Beauty Store</p>
            </div>
          </div>
        </Feedback>
      </FeedbackContent>
    </FeedbackContainer>
  )
}

export default FeedbackSection
