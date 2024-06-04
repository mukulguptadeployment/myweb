import React, { useEffect, useState } from "react";
import "./TalkCard.scss";

export default function TalkCard({talkDetails}) {

  const carousalItems = [
    {
      name: "Nischal Raman",
      title: "Product Manager",
      company: "DePronto Infotech",
      profilePic: "./images/Nischal.jpg",
      testimonial: "Leaving a Legacy, Extremely happy with the compliments received from the IPRU team Vice President. We are all grateful to 'Protection Squad' for their tireless efforts in completing a challenging project in a short period of time.",
    }, 
    {
      name: "Akshay Bhopani",
      title: "SDE-2",
      company: "DePronto Infotech",
      profilePic: "./images/Akshay.jpg",
      testimonial: "Congratulations on the successful delivery of IPS Rate Changes that went Live yesterday. Got feedback from the client for exceptional Bug-Free Delivery, Late Night Support up to 4 AM (almost Morning) from the Protection Team. There were a lot of Logical Changes and iterations from the client still the delivery was smooth. Thank you for such Amazing Efforts and Dedication. #CreatingStandards",
    },
    {
      name: "Binit Jha",
      title: "Team Leader",
      company: "DePronto Infotech",
      profilePic: "./images/Binit.jpg",
      testimonial: "Above & Beyond, I would like to praise the Roshan & entire protection squad for delivering a critical project in crunched timelines and multiple challenges with utmost dedication and commitment.The efforts are truly appreciated",
    },
    {
      name: "Mohd. Zuber",
      title: "SDE-II",
      company: "Google",
      profilePic: "./images/Zuber.jpg",
      testimonial: "It was a privilege to manage Roshan, whose outstanding proficiency in React and JavaScript played a pivotal role in the success of our projects. Roshan's in-depth expertise in React JS was instrumental in driving innovation and delivering high-quality solutions. A dedicated and talented individual, Roshan consistently demonstrated efficiency and creativity in handling complex tasks. I wholeheartedly recommend Roshan for any role demanding expertise in React and JavaScript – an asset to any organization or team.",
    },
    {
      name: "Sushrut Mishra",
      title: "CEO",
      company: "VCMediaLabs",
      profilePic: "./images/Sushrut.jpg",
      testimonial: "I would highly recommend Roshan for any role that requires to solve any complex problem be it frontend or backend. Thanks Roshan for sticking with us and making this project possible.",
    },
    {
      name: "Kewal Rathod",
      title: "Team Lead",
      company: "Unico",
      profilePic: "./images/Kewal.jpg",
      testimonial: "Exceptional Skills, I would like to praise Kaval and Roshan for their contribution to the recent projects. Your unbeatable commitment & problem-solving attitude helped deliver the highest-priority  & most delicate projects in challenging timelines. Khabib of Team Protection",
    },
    {
      name: "Aniket Rai",
      title: "SDE-1",
      company: "Gupshup",
      profilePic: "./images/Aniket.jpg",
      testimonial: "I would like to praise Roshan and Suraj for showing exceptional team skills by coordinating between UI and Backend team and resolving the major issues by themselves, making the project move forward by catering to the dynamic changes and issues rapidly. Keep up the good work. ✨✨",
    },
  ]
  
  

  useEffect(()=>{

  },[])

  return (
    <div className="parentContainer">
      <div className="container">
      {/* <img className="carousalIcon" src="./images/prev.svg" onClick={decCounter}/> */}
        {carousalItems.map((item)=> <div
          className={
            talkDetails.isDark ? "dark-rectangle rectangle" : "rectangle"
          }
        >
        <div className="profilePicture">
          <img src={item.profilePic} alt={item.name} className="profilePic"/>
        </div>
        <div className="cardHeader">
          <div className="cardHeaderLeft"></div>
          <div className="cardHeaderRight">
            <span>{item.name} | {item.title}</span><br/>
            @ <span>{item.company}</span> <br/>
            
          </div>
        </div>
        <div className="cardBody">
            <div className="cardMessageBox">
            {item.testimonial}
            </div>
        </div>
        </div>)}
          {/* <img className="carousalIcon" src="./images/next.svg" onClick={incCounter}/> */}
      </div>
    </div>
  );
}
