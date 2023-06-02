import React, { useState } from "react";

import { HomePageExplore } from "../../../data/homepage-explore";

import HighlightText from "./HighlightText";
import CourseCard from "./CourseCard";

const tabsName = [
  "Free",
  "New to coding",
  "Most popular",
  "Skills paths",
  "Career paths",
];

const ExploreMore = () => {
  const [currentTab, setCurrentTab] = useState(tabsName[0]);
  const [courses, setCourses] = useState(HomePageExplore[0].courses);
  const [currentCard, setCurrentCard] = useState(
    HomePageExplore[0].courses[0].heading
  );

  const setMyCard = (value) => {
    setCurrentTab(value);

    const result = HomePageExplore.filter((course) => course.tag === value);
    setCourses(result[0].courses);

    setCurrentCard(result[0].courses[0].heading);
  };

  return (
    <div>
      <div className="text-4xl font-semibold text-center my-10">
        Unlock the
        <HighlightText text={"Power of Code"} />

        <p className="text-center text-richblack-300 font-semibold text-lg mt-1">
        Learn to Build Anything You Can Imagine
      </p>
      </div>
      
      {/* tab */}
      <div className=" drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] flex gap-5 -mt-5 font-medium mx-auto rounded-full bg-richblack-800 mb-2 border-richblack-100 px-1 py-1">

      {tabsName.map((ele, index) => {
          return (
            <div
              className={` text-[16px] flex flex-row items-center gap-2 ${
                currentTab === ele
                  ? "bg-richblack-900 text-richblack-5 font-medium"
                  : "text-richblack-200"
              } px-7 py-[7px] rounded-full transition-all duration-200 cursor-pointer hover:bg-richblack-900 hover:text-richblack-5`}
              key={index}
              onClick={() => setMyCard(ele)}
            >
              {ele}
            </div>
          );
        })}

      </div>

      <div className="lg:h-[200px]"></div>

      {/* course card */}

      <div className="lg:absolute gap-10 justify-center lg:gap-0 flex lg:justify-between flex-wrap w-full lg:bottom-[0] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[50%] text-black lg:mb-0 mb-7 lg:px-0 px-3">
        {
          courses.map((element ,index) =>{

            return (
              <CourseCard
                key={index}
                cardData = {element}
                currentCard = {currentCard}
                setCurrentCard = {setCurrentCard}
              />
            )
            
          })
        }
      </div>

    </div>
  );
};

export default ExploreMore;
