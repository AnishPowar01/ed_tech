import React from "react";
import { Link } from "react-router-dom";

import { FaArrowRight } from "react-icons/fa";
import HighlightText from "../components/core/HomePage/HighlightText";

import CTAButton from "../components/core/HomePage/CTAButton";

import CodeSection from "../components/core/HomePage/CodeSection";

import TimelineSection from "../components/core/HomePage/TimelineSection";

import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection";

import Banner from "../assets/Images/banner.mp4";
import InstructorSection from "../components/core/HomePage/InstructorSection";
import Footer from "../components/common/Footer";
import ExploreMore from "../components/core/HomePage/ExploreMore";

const Home = () => {
  return (
    <div>
      {/* section 1  */}

      <div className="relative mx-auto flex flex-col w-11/12 items-center text-[#F1F2FF] justify-between max-w-maxContent">
        <Link to={"/signup"}>
          <div className="group mt-16 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 transition-all duration-200  hover:scale-95 shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)]">
            <div className="flex flex-row items-center gap-2 rounded-full px-7 py-[8px] transition-all duration-200 group-hover:bg-richblack-900">
              <p>Become an Instructor</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>

        <div className=" mt-8 text-center text-4xl font-semibold">
          Empower Your Future with
          <HighlightText text={"Coding Skills"} />
        </div>

        <div className="mt-4 text-richblack-300 w-[90%] text-center text-base font-medium ">
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.
        </div>

        <div className="flex flex-row gap-7 mt-8">
          <CTAButton active={true} linkto={"/signup"}>
            Learn More
          </CTAButton>

          <CTAButton active={false} linkto={"/login"}>
            Book a Demo
          </CTAButton>
        </div>

        <div className="mx-3 my-7 shadow-[10px_-5px_50px_-5px] shadow-blue-200">
          <video muted loop autoPlay className="shadow-[20px_20px_rgba(255,255,255)]">
            <source src={Banner} type="video/mp4" />
          </video>
        </div>

        {/* code section 1 */}

        <div>
          <CodeSection
            position={"lg:flex-row"}
            heading={
              <div className="text-4xl font-semibold">
                Unlock Your
                <HighlightText text={"coding potential"} />
                with our online courses
              </div>
            }
            subHeading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              btnText: "try it yourself",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "learn more",
              linkto: "/login",
              active: false,
            }}
            code={`<!DOCTYPE html>\n<html>\n<head>\n<title>Example</title>\n<linkrel="stylesheet"href="styles.css">\n/head>\n<body>\n<h1><ahref="/">Header</a><h1>\n<nav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>\n/nav>`}
            codeColor={"text-richblue-100"}
          />
        </div>

        {/* Code Section 2 */}

        <div>
          <CodeSection
            position={"lg:flex-row-reverse"}
            heading={
              <div className="text-4xl font-semibold">
                Start
                <HighlightText text={"coding in seconds"} />
                
              </div>
            }
            subHeading={
              "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            }
            ctabtn1={{
              btnText: "Continue Lesson",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "learn more",
              linkto: "/login",
              active: false,
            }}
            code={`<!DOCTYPE html>\n<html>\n<head>\n<title>Example</title>\n<linkrel="stylesheet"href="styles.css">\n/head>\n<body>\n<h1><ahref="/">Header</a><h1>\n<nav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>\n/nav>`}
            codeColor={"text-yellow-100"}
          />
        </div>

         <ExploreMore/>
      </div>


      {/* section 2  */}

      <div className='bg-pure-greys-5 text-richblack-700'>
            <div className='homepage_bg h-[310px]'>

                <div className='w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-5 mx-auto'>
                    <div className='h-[150px]'></div>
                    <div className=' mt-8 flex flex-row gap-7 text-white '>
                        <CTAButton active={true} linkto={"/signup"}>
                            <div className='flex items-center gap-3' >
                                Explore Full Catalog
                                <FaArrowRight />
                            </div>
                            
                        </CTAButton>
                        <CTAButton active={false} linkto={"/signup"}>
                            <div>
                                Learn more
                            </div>
                        </CTAButton>
                    </div>

                </div>


            </div>

            <div className='mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-8'>

                <div className='flex flex-row gap-7 mb-10 mt-[100px] justify-between'>
                    <div className='text-4xl font-semibold w-[45%]'>
                        Get the Skills you need for a
                        <HighlightText text={"Job that is in demand"} />
                    </div>

                    <div className='flex flex-col gap-10 w-[40%] items-start'>
                    <div className='text-[16px]'>
                    The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
                    </div>
                    <CTAButton active={true} linkto={"/signup"}>
                        <div>
                            Learn more
                        </div>
                    </CTAButton>
                    </div>

                </div>
                
                

                <TimelineSection />

                <LearningLanguageSection />

            </div>

          
      </div>


      {/* section 3  */}
      <div className="w-11/12 mx-auto max-w-maxContent flex flex-col items-center justify-between gap-8 bg-richblack-900 text-[#F1F2ff]">

      <InstructorSection/>

      {/* Review */}


      
      </div>

      {/* Footer  */}
      <Footer/>
    </div>
  );
};

export default Home;

// background: linear-gradient(118.19deg, #1FA2FF -3.62%, #12D8FA 50.44%, #A6FFCB 104.51%),
// linear-gradient(0deg, #F1F2FF, #F1F2FF);

// box-shadow: 20px 20px 0px 0px rgba(245, 245, 245, 1);
