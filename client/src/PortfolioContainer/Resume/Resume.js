import React, { useState, useEffect } from "react";
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import './Resume.css';

export default function Resume(props) {
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
    const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id);
        return
        Animations.animations.fadeInScreen(props.id);
    }
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const ResumeHeading = (props) => {
        return (
            <div className="resume-heading">
                <div className="resume-main-heading">
                    <div className="heading-bullet"></div>
                    <span>{props.heading ? props.heading : ""}</span>
                    {props.fromDate && props.toDate ? (
                        <div className="heading-date">
                            {props.fromDate + "-" + props.toDate}
                        </div>
                    ) : (
                        <div></div>
                    )}
                </div>
                <div className="resume-sub-heading">
                    <span>{props.subHeading ? props.subHeading : ""}</span>
                </div>
                <div className="resume-heading-description">
                    <span>{props.description ? props.description : ""}</span>
                </div>
            </div>
        );
    };

    const resumeBullets = [
        { label: "Personal Info", logoSrc: "per1.jpg" },
        { label: "Education", logoSrc: "education.svg" },
        { label: "Internship", logoSrc: "work-history.svg" },
        { label: "Skills", logoSrc: "programming-skills.svg" },
        { label: "Interests/Hobbies", logoSrc: "interests.svg" },
    ];

    const programmingSkillsDetails = [
        { skill: "Data Structures and Algorithms", ratingPercentage: 90 },
        { skill: "ReactJS", ratingPercentage: 85 },
        { skill: "C", ratingPercentage: 90 },
        { skill: "NodeJs", ratingPercentage: 85 },
        { skill: "C++", ratingPercentage: 90 },
        { skill: "ExpressJS", ratingPercentage: 85 },
        { skill: "Java", ratingPercentage: 70 },
        { skill: "MongoDB", ratingPercentage: 85 },
        { skill: "Python", ratingPercentage: 70 },
        { skill: "React Native", ratingPercentage: 85 },
    ];

    const personalDetails = [
        {
            heading: "Full Name : ",
            subHeading: "  Chirag M Tanksali",
        },
        {
            heading: "Age : ",
            subHeading: "21",
        },
        {
            heading: "Profession : ",
            subHeading: "Electronics and Communication",
        },
        {
            heading: "Nationality : ",
            subHeading: "India",
        },
        {
            heading: "Languages : ",
            subHeading: "English,Hindi,Kannada",
        },
    ];

    const resumeDetails = [
        <div className="resume-screen-container " key="personalDetails">
            {personalDetails.map((personalDetails, index) => (
                <ResumeHeading
                    key={index}
                    title={personalDetails.title}
                    heading={personalDetails.heading}
                    subHeading={personalDetails.subHeading}
                    description={personalDetails.description}
                // fromDate={personalDetails.duration.fromDate}
                // toDate={personalDetails.duration.toDate}
                />
            ))}
        </div>,  //internships
        <div className="resume-screen-container " key="education">
            <ResumeHeading
            heading={"KLS Gogte Institute of Technology , Belagavi "}
            subHeading={"BACHELOR OF ENGINEERING . AGGREGATE SCORE:8.895 CGPA"}
            fromDate={"2019"}
            toDate={"2023"}
            />
            <ResumeHeading
                heading={"Vagdevi Vikas PU Science College , Mudhol  "}
                subHeading={"Class 12 . KEA BOARD AGGREGATE SCORE: 95% PCM"}
            fromDate={"2017"}
            toDate={"2018"}
            />
            <ResumeHeading
                heading={"Rotary English Medium Highschool , Mudhol "}
                subHeading={"CLASS 10 . KSEEB BOARD AGGREGATE SCORE: 96.64%"}
            fromDate={"2015"}
            toDate ={"2016"}
            />
        </div>,
        <div className="resume-screen-container " key="work-experience">
            <div className="experience-container">
                <ResumeHeading
                    heading={"Shape Ai"}
                    subHeading={"FULL STACK DEVELOPER INTERN"}
                // fromDate={"2021"}
                // toDate={"Present"}
                />
                <div className="experience-description">
                    <span className="resume-description-text">
                        Job Responsibilites: Worked as MERN stack web developer.
                    </span>
                </div>
                <div className="experience-description">
                    <span className="resume-description-text">
                        - Developed an ecommerce website for client with the dashboard for
                        managing the products, managing reviews, users, payment etc. .
                    </span>
                    <br />
                    <span className="resume-description-text">
                        - Integrated the web app with backend services to create new user
                        onboarding application with dynamic form content.{" "}
                    </span>
                    <br />
                    <span className="resume-description-text">
                        - I stretch my mental capacity to develope UI as per the given
                        designs.
                    </span>
                    <br />
                </div>
            </div>
        </div>,

        <div className="resume-screen-container programming-skills-container "
            key="programming-skills"
        >
            {programmingSkillsDetails.map((skill, index) => (
                <div className="skill-parent" key={index}>
                    <div className="heading-bullet"></div>
                    <span>{skill.skill}</span>
                    <div className="skill-percentage">
                        <div
                            style={{ width: skill.ratingPercentage + "%" }}
                            className="active-percentage-bar"
                        ></div>
                    </div>
                </div>
            ))}
        </div>,

        <div className="resume-screen-container " key="interests">
            <ResumeHeading
                heading="Teaching"
                description=" Apart from being a Student , I also love to teach people what I know simply because i believe in sharing."
            />
            <ResumeHeading
                heading="Travelling"
                description=" I like Travelling and discovering new places , meet new people .I see Travelling as an enthralling education simply because Travelling involves everything .    "
            />
            <ResumeHeading
                heading="Competitive Gaming"
                description=" I like to challenge my passion a lot while competing in Cricket ,And also while playing PUBG/BGMI , pushing the rank excites me the most."
            />
        </div>,

    ];

    const handleCarousal = (index) => {
        let offsetHeight = 360;

        let newCarousalOffset = {
            style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
        };

        setCarousalOffsetStyle(newCarousalOffset);
        setSelectedBulletIndex(index);
    };

    const getBullets = () => {
        return resumeBullets.map((bullet, index) => (
            <div
                onClick={() => handleCarousal(index)}
                className={
                    index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
                }
                key={index}
            >
                <img
                    className="bullet-logo"
                    src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
                    alt="No Internet connection"
                />
                <span className="bullet-label">{bullet.label}</span>
            </div>
        ));
    };


    const getResumeScreens = () => {
        return (
            <div
                style={carousalOffsetStyle.style}
                className="resume-details-carousal"
            >
                {resumeDetails.map((ResumeDetail) => ResumeDetail)}
            </div>
        );
    };

    useEffect(() => {
        return () => {
            /* UNSUBSCRIBE THE SUBSCRIPTIONS */
            fadeInSubscription.unsubscribe();
        };
    }, [fadeInSubscription]);

    return (
        <div
            className="resume-container screen-container "
            id={props.id || ""}
        >
            <div className="resume-content" >
                <ScreenHeading title={"Resume"} subHeading={"My Personal and Formal Bio Details"} />
                <div className="resume-card">
                    <div className="resume-bullets">
                        <div className="bullet-container">
                            <div className="bullet-icons"></div>
                            <div className="bullets">{getBullets()}</div>
                        </div>
                    </div>

                    <div className="resume-bullet-details">{getResumeScreens()}</div>
                </div>
            </div>
        </div>
    );
}

// export default Resume;