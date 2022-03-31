import React from 'react';
import Typical from 'react-typical'
import ScrollService from '../../../utilities/ScrollService';
import './Profile.css'

export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                        <a href="https://www.facebook.com/chirag.tanksali" target="_blank"> <span ><i class="fa fa-facebook-square" ></i> </span>  </a>
                        <a href="https://www.instagram.com/chirag_tanksali/" target="_blank"> <span><i class="fa fa-instagram"></i></span></a>
                        <a href="https://twitter.com/TanksaliChirag" target="_blank"><span><i class="fa fa-twitter"></i></span></a>
                        <a href="https://www.linkedin.com/in/chirag-tanksali-39a818210/" target="_blank"><span><i class="fa fa-linkedin"></i></span></a>
                        <a href="https://github.com/ChiragTanksali" target="_blank">  <span><i class="fa fa-github"></i></span></a>
                        </div>
                    </div>
                
                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {""}
                        HELLO, I'M <span className='highlighted-text'>CHIRAG</span>
                        </span>
                    </div>
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {""}
                            <h1>
                                <Typical
                                loop = {Infinity}
                                steps={[
                                    "A Full Stack Web Developer",
                                    1000,
                                    "An App Developer",
                                    1000,
                                    "A Coder",
                                    1000,
                                ]}
                                />
                            </h1>
                            <span className='profile-role-tagline'>
                                Knack of Building applications with front and back end operations.
                            </span>
                        </span>
                    </div>
                    <div className='profile-options'>
                        <button className='btn primary-btn'
                        onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
                                {""}
                                Hire me{""}
                        </button>
                        <a href="https://drive.google.com/file/d/12KcYiXZ5Tu-1bbHrQrK8k991zy8li_gq/view?usp=sharing " class="btn" target="_blank"> <button className='btn highlighted-btn'>Get Resume</button></a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'> </div>
                </div>
            </div>
        </div>
    )
}
