import React, {useEffect} from 'react';
import './WhyLetsGtok.css'
import about from '../../assets/images/about.jpg'
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function WhyLetsGtok() {

    return(
        <div className="container my-4">
            <h3 className="text-center my-5" data-aos="fade-down">Why <span style={{color: '#6930db', fontWeight: 'bold'}}>Lets Gtok?</span></h3>
            <div className="row">
                <div className="col-md-6 my-2" data-aos="fade-down">
                    <img className="img-fluid" src={about} alt=""/>
                </div>
                <div className="col-md-6 mt-2">
                    <h2 className="big-title" data-aos="fade-down">Lets Gtok</h2>
                    <p className="normal-text" data-aos="fade-down">Aims to provide: </p>
                    <div className="why-us-tag my-3" data-aos="zoom-in" data-aos-delay="200">
                        <FontAwesomeIcon className="mx-2" icon={faCheckCircle} size="lg"/>
                        An online safe place
                    </div>
                    <div className="why-us-tag my-3" data-aos="zoom-in" data-aos-delay="300">
                        <FontAwesomeIcon className="mx-2" icon={faCheckCircle} size="lg"/>
                        Opportunity to share and connect with genuine feelings
                    </div>
                    <div className="why-us-tag my-3" data-aos="zoom-in" data-aos-delay="400">
                        <FontAwesomeIcon className="mx-2" icon={faCheckCircle} size="lg"/>
                        Share feelings and activities Anonymously
                    </div>

                </div>
            </div>
        </div>

    );
}

export default WhyLetsGtok;

