import React, { useEffect } from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import "./AboutMe.css"

export default function AboutMe(props) {
    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id)
            return
        Animations.animations.fadeInScreen(props.id)
    }
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

    const SCREEN_CONSTANTS = {
        description: " I'm Chirag Tanksali  Currently studying Bachelor of Engineering at KLS Gogte Institute of Technology, Belagavi. I'm a Creative Full Stack Web Developer as well as an App developer with Background knowledge of MERN Stacks and React Native .Also, I'm passionate about developing  User-friendly Websites that improves the lives of those around me and I also like solving Competitive programming questions",
        highlights: {
            bullets: [
                "Front and Back end Developer",
                "MERN Stack Developer",
                "App Developer",
                "React and React Native Developer",
                // "Managing Database",
            ],
            heading: "Here are a Few Highlights:"
        }
    }

    const renderHighlight = () => {
        return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
            <div className="highlight" key={i}>
                <div className="highlight-blob"></div>
                <span>{value}</span>
            </div>
        ));
    };



    return (
        <div
            className="about-me-container screen-container fade-in " data-aos-duration="2000"
            id={props.id || ""}
        >
            <div className="about-me-parent">
                <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
                <div className="about-me-card">
                    <div className="about-me-profile"></div>
                    <div className="about-me-details">
                        <span className="about-me-description">
                            {SCREEN_CONSTANTS.description}
                        </span>
                        <div className="about-me-highlights">
                            <div className="highlight-heading">
                                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
                            </div>
                            {renderHighlight()}
                        </div>
                        <div className="about-me-options">
                            <a href="https://drive.google.com/file/d/12KcYiXZ5Tu-1bbHrQrK8k991zy8li_gq/view?usp=sharing" class="btn" target="_blank"> <button className='btn highlighted-btn'>Get Resume</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
