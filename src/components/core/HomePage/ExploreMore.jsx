import React, { useState } from 'react'

import {HomePageExplore} from "../../../data/homepage-explore"

const tabsName = [
    "Free",
    "New to coding",
    "Most popular",
    "Skills paths",
    "Career paths",
  ];

const ExploreMore = () => {

  const [currentTab, setCurrentTab] = useState(tabsName[0]);
  const[courses,setCourses] = useState(HomePageExplore[0].courses);
  const [currentCard, setCurrentCard] = useState(HomePageExplore[0].courses[0].heading)


  const setMyCard = (value) =>{
    setCurrentTab(value);
    
    const result = HomePageExplore.filter((course)=> course.tag === value)
    setCourses(result[0].courses)

    setCurrentCard(result[0].courses[0].heading)
  }
    
  return (
    <div>ExploreMore</div>
  )
}

export default ExploreMore