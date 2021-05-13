import React, {useEffect} from 'react';
import './TopSection.css'
import Particles from 'react-particles-js';
import emoticon from '../../assets/images/emoticon.png'
function TopSection() {
    useEffect(() => {
        (function () {
            // Variables
            let $curve = document.getElementById("curve");
            let last_known_scroll_position = 0;
            let defaultCurveValue = 350;
            let curveRate = 3;
            let ticking = false;
            let curveValue;

            function scrollEvent(scrollPos) {
                if (scrollPos >= 0 && scrollPos < defaultCurveValue) {
                    curveValue = defaultCurveValue - parseFloat(scrollPos / curveRate);
                    $curve.setAttribute(
                        "d",
                        "M 800 300 Q 400 " + curveValue + " 0 300 L 0 0 L 800 0 L 800 300 Z"
                    );
                }
            }

            window.addEventListener("scroll", function (e) {
                last_known_scroll_position = window.scrollY;

                if (!ticking) {
                    window.requestAnimationFrame(function () {
                        scrollEvent(last_known_scroll_position);
                        ticking = false;
                    });
                }

                ticking = true;
            });
        })();

    });
    return (
        <div className=" top-section d-flex align-items-center justify-content-center text-center">
            <div className="card-top-section mx-auto col-md-4">
                <img className="img-fluid img-top-section my-2" src={emoticon} alt=""/>
                <hr className="mx-auto" style={{width: '80%'}}/>
                <h1 className="my-3 font-weight-bold">Share your feelings </h1>
                <h5 className="my-3">Without being judged </h5>
            </div>
            <div className="svg-container">
                <svg viewBox="0 0 800 400" className="svg">
                    <path id="curve" fill="#6930db" d="M 800 300 Q 400 350 0 300 L 0 0 L 800 0 L 800 300 Z">
                    </path>
                </svg>
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
        </div>

    );
}

export default TopSection;
