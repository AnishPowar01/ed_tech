import React from 'react'

import Instructor from "../../../assets/Images/Instructor.png"
import HighlightText from './HighlightText'
import CTAButton from './CTAButton'
import { FaArrowRight } from 'react-icons/fa'

const InstructorSection = () => {
  return (
    <div className='mt-14'>
        <div className='flex gap-20 items-center'>

        {/* left section */}

        <div className='w-[50%]'>

        <img src={Instructor} alt="" className='shadow-white' />

        </div>


        <div className='flex flex-col w-[50%] gap-10'>
          
          <div className='text-4xl font-sem
          w-[50%]'>
            Become an
            <HighlightText text={"Instructor"}/>
          </div>

          <div className="text-richblack-300 font-medium w-[80%]">
          Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.
          </div>
           
          <div className='w-fit'>
          <CTAButton linkto={"/signup"} active={true}>

          <div className='flex flex-row gap-2 items-center '>
          Start Teaching Today
          <FaArrowRight/>
          </div>

          </CTAButton>
          </div>
          



        </div>


        {/* Right Section */}

        </div>
    </div>
  )
}

export default InstructorSection