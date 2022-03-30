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
        smartSpeed: 8000,
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
                                        <h3>Easy Shop : Ecommerce Web Application</h3>
                                        <p>
                                            Used Redux for changing the states, Managing and Storing Database in the cloud.
                                            Implemented functionalities like custom Admin Panel area to manage products,user and orders to update info and other
                                            functionalities like JWT authentication,Product Search etc..
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
                                        <h3>E meet : Video and Voice call Web application</h3>
                                        <p>
                                            Built using WebRTC,Socket.IO and Javascript.Right from the landing page where users will able to host a new meeting or will be able to join in an existing meeting by using meeting code to advanced features like creating audio and video streaming,Live Chat,Sharing screen,Recording system etc!
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
                                            Developed a Responsive portfolio website with email functionality using React.js,Bootstrap,rxjs and NodeJS. Implemented  Smooth Scrolling and Fade In Animation and react type effect changing different text based on timing and call to action button using Rxjs.Deployed website on Heroku Server.
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
                                        <h3>Expense Tracker Mobile App</h3>
                                        <p>
                                        A cross-platformed (iOS and Android) Mobile Application that helps users to track and manage their total expense.Developed using React Native .Built with the purpose to learn the use of React Navigation and to implement CRUD operations using firebase (Real time Data Storage in firestore database).
                                        </p>
                                    </div>
                                    <div className='client-info'>
                                        <img src="img/Projects/app.png" alt='No Internet Connection'></img>
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