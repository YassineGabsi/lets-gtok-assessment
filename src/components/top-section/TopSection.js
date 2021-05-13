import React from 'react';
import './TopSection.css'
import Particles from 'react-particles-js';
import emoticon from '../../assets/images/emoticon.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart, faUserCheck, faHandPointUp, faShare} from '@fortawesome/free-solid-svg-icons'

function TopSection() {

    return (
        <div className="top-section d-flex align-items-center justify-content-center text-center" style={{position: 'relative'}}>
            <div className="card-top-section mx-auto col-md-4 container" style={{zIndex: '50'}}>
                <img className="img-fluid img-top-section my-3" src={emoticon} alt=""/>
                <hr className="mx-auto"
                    style={{width: '80%', marginBottom: '-15px', marginTop: '40px', color: '#6930db'}}/>
                <FontAwesomeIcon icon={faHeart} size="2x" style={{color: '#6930db'}}/>
                <h1 className="my-3 font-weight-bold">Share your feelings </h1>
                <h5 className="my-3">Without being judged </h5>
                <button className="button-primary-custom">Share your feelings</button>
            </div>
            <Particles className="particles-alignment"
                       params={
                           {
                               "particles": {
                                   "number": {
                                       "value": 5,
                                       "density": {
                                           "enable": true,
                                           "value_area": 300
                                       }
                                   },
                                   "color": {
                                       "value": "#ffffff"
                                   },
                                   "shape": {
                                       "type": "circle",
                                       "stroke": {
                                           "width": 3,
                                           "color": "#ffffff"
                                       },
                                       "polygon": {
                                           "nb_sides": 6
                                       },
                                       "image": {
                                           "src": "img/github.svg",
                                           "width": 30,
                                           "height": 30
                                       }
                                   },
                                   "opacity": {
                                       "value": ".001",
                                       "random": false,
                                       "anim": {
                                           "enable": false,
                                           "speed": 2,
                                           "opacity_min": ".000001",
                                           "sync": false
                                       }
                                   },
                                   "size": {
                                       "value": 1,
                                       "random": true,
                                       "anim": {
                                           "enable": false,
                                           "speed": 5,
                                           "size_min": 0.5,
                                           "sync": false
                                       }
                                   },
                                   "line_linked": {
                                       "enable": true,
                                       "distance": 300,
                                       "color": "#ffffff",
                                       "opacity": 0.1,
                                       "width": 1
                                   },
                                   "move": {
                                       "enable": true,
                                       "speed": 3,
                                       "direction": "none",
                                       "random": false,
                                       "straight": false,
                                       "out_mode": "out",
                                       "attract": {
                                           "enable": false,
                                           "rotateX": 600,
                                           "rotateY": 1200
                                       }
                                   }
                               },
                               "interactivity": {
                                   "detect_on": "canvas",
                                   "events": {
                                       "onhover": {
                                           "enable": false,
                                           "mode": "repulse"
                                       },
                                       "onclick": {
                                           "enable": false,
                                           "mode": "push"
                                       },
                                       "resize": true
                                   },
                                   "modes": {
                                       "grab": {
                                           "distance": 400,
                                           "line_linked": {
                                               "opacity": ".001"
                                           }
                                       },
                                       "bubble": {
                                           "distance": 400,
                                           "size": 40,
                                           "duration": 2,
                                           "opacity": ".003",
                                           "speed": 3
                                       },
                                       "repulse": {
                                           "distance": 200
                                       },
                                       "push": {
                                           "particles_nb": 4
                                       },
                                       "remove": {
                                           "particles_nb": 2
                                       }
                                   }
                               },
                               "retina_detect": true,
                               "config_demo": {
                                   "hide_card": false,
                                   "background_color": "#ffffff",
                                   "background_image": "",
                                   "background_position": "50% 50%",
                                   "background_repeat": "no-repeat",
                                   "background_size": "cover"
                               }
                           }
                       }/>
            <div className="col-md-4 mt-4 top-tags-wrapper">
                <div className="d-flex align-items-center justify-content-center">
                    <div className="mr-5">
                        <FontAwesomeIcon icon={faHandPointUp} size="2x" style={{color: '#ffffff'}}/>
                        <p className="top-tag">• Join •</p>
                    </div>
                    <div className="mx-5">
                        <FontAwesomeIcon icon={faShare} size="2x" style={{color: '#ffffff'}}/>
                        <p className="top-tag">• Share •</p>
                    </div>
                    <div className="ml-5">
                        <FontAwesomeIcon icon={faUserCheck} size="2x" style={{color: '#ffffff'}}/>
                        <p className="top-tag">• Feel Relief •</p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default TopSection;

