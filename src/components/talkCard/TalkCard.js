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
      name: "Akshay Bhopani",
      title: "SDE-2",
      company: "DePronto Infotech",
      profilePic: "./images/Akshay.jpg",
      testimonial: "Congratulations on making the Thank You Revamp Project Live today. Over 1 year of Development Efforts and 64 Commits later the UI looks awesome and the new medical scheduling features are running smoothly.",
    },
    {
      name: "Binit Jha",
      title: "Team Leader",
      company: "DePronto Infotech",
      profilePic: "./images/Binit.jpg",
      testimonial: "Above & Beyond, I would like to praise the Mukul & entire protection squad for delivering a critical project in crunched timelines and multiple challenges with utmost dedication and commitment.The efforts are truly appreciated",
    },
    {
      name: "Kewal Rathod",
      title: "Team Lead",
      company: "Depronto Infotech",
      profilePic: "./images/Kewal.jpg",
      testimonial: "Exceptional Skills, I would like to praise Kaval and Mukul for their contribution to the recent projects. Your unbeatable commitment & problem-solving attitude helped deliver the highest-priority  & most delicate projects in challenging timelines. Khabib of Team Protection",
    },
    {
      name: "Kewal Rathod",
      title: "Team Lead",
      company: "Depronto Infotech",
      profilePic: "./images/Kewal.jpg",
      testimonial: "I Would Like To Praise Anshul & Mukul For Taking Initative For Improving The Current Documentation & Training Process. Keep Up The Good Work :)",
    }
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
