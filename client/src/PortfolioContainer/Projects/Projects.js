import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import './Projects.css';


export default function Projects(props) {

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id)
            return
        Animations.animations.fadeInScreen(props.id)
    };
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const options = {
        loop: true,
        margin: 0,
        nav: true,
        animateIn: "bounceInRight",
        animateOut: "bounceOutRight",
        dots: true,
        autoplay: true,
        smartSpeed: 400,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 1,
            },
            1000: {
                items: 3,
            },
        },
    };

    return (
        <div>
            <ScreenHeading
                title={'Projects'}
                subHeading={'My Extra Curricular Project Details'}
            />
            <section className='projects-section fade-in' id={props.id || ''}>
                <div className="container">
                    <div className="role">
                        <OwlCarousel className='owl-carousel' id='projects-carousel' {...options}>

                            <div className='col-lg-12'>
                                <div className='project-item'>
                                    <div className='project-comment'>
                                    <h3>Twitter Clone</h3>
                                        <p>
                                        Built using Node.js,Socket.IO and MongoDB. This project is complete with Tweets,Likes,comments and retweets,Profile pages,Following and followers support,Instant messaging in real time,group chat support,Profile pictures,Cover photos and much more !
                                        </p>
                                    </div>
                                    <div className='client-info'>
                                        <img src="img/Projects/website.png" alt='No Internet Connection'></img>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='project-item'>
                                    <div className='project-comment'>
                                    <h3>Ecommerce Mobile Application</h3>
                                        <p>
                                        Developed a E-commerce cross-platformed(iOS and Android) Mobile Application with React Native, Redux,Node,Express and MongoDB.
                                        Admin area to manage customers,products and orders from mobile phone!
                                        Product search,carousel and more!
                                        </p>
                                    </div>
                                    <div className='client-info'>
                                        <img src="img/Projects/app.png" alt='No Internet Connection'></img>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='project-item'>
                                    <div className='project-comment'>
                                        <h3>Google Meet Clone</h3>
                                        <p>
                                        Built using WebRTC,Socket.IO and Javascript.Right from the landing page where users will able to host a new meeting or will be able to join in a existing meeting by using meeting code to advanced features like creating audio and video streaming,Live Chat,Sharing screen,Recording system etc!
                                        </p>
                                    </div>
                                    <div className='client-info'>
                                        <img src="img/Projects/website.png" alt='No Internet Connection'></img>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='project-item'>
                                    <div className='project-comment'>
                                    <h3>Personal Portfolio Website</h3>
                                        <p>
                                        Developed a Responsive portfolio website with email functionality using React.js,Bootstrap,rxjs and NodeJS.Deployed website on Heroku Server.
                                        </p>
                                    </div>
                                    <div className='client-info'>
                                        <img src="img/Projects/website.png" alt='No Internet Connection'></img>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>

            </section>
        </div>
    )
}