"use client"

import React from 'react'
import { DownloadContainer } from './DownloadSection.styles';
import { DownloadContent } from './DownloadSection.styles';
import Image from 'next/image';
import DownloadCueprise from '@/assets/images/downloadCueprise.png'

const DownloadSection = () => {
  return (
    <DownloadContainer>
      <h1 className="title">Download</h1>
      <h2>Get Cueprise</h2>

      <DownloadContent>
        <div className='text'>
          <h3>Download Cueprise For Mobile</h3>
          <p>Lorem ipsum dolor sit amet consectetur. Tristique lectus platea luctus enim facilisis elementum. Lorem sapien aliquam ultricies eleifend sagittis ullamcorper massa. Enim sed purus venenatis at scelerisque sit dolor tincidunt non. </p>
        </div>
        <div className='img'>
          <Image src={DownloadCueprise} alt='download image'/>
        </div>
      </DownloadContent>
    </DownloadContainer>
  )
}

export default DownloadSection
