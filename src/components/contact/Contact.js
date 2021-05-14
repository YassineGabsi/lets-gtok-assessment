import React from 'react';
import './Contact.css'
import contact from '../../assets/images/contact.jpg'
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


function Contact() {
    return (
        <div className="contact-wrapper my-4">
            <h3 className="text-center my-5" data-aos="fade-down">Contact <span
                style={{color: '#6930db', fontWeight: 'bold'}}>Us</span></h3>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 text-center">
                        <label className="col-12 text-center my-3" data-aos="zoom-in" data-aos-delay="200">
                            <input className="contact-input col-10" type="text" placeholder="Name"/>
                        </label>
                        <label className="col-12 text-center my-3" data-aos="zoom-in" data-aos-delay="300">
                            <input className="contact-input col-10" type="text" placeholder="Email"/>
                        </label>
                        <label className="col-12 text-center my-3" data-aos="zoom-in" data-aos-delay="400">
                            <textarea className="contact-input col-10" rows="4" cols="50" placeholder="Message"/>
                        </label>

                        <button className="button-primary-custom text-center" data-aos="zoom-in"
                                data-aos-delay="500">Send now
                        </button>

                    </div>
                    <div className="col-md-6" data-aos="fade-left">
                        <img className="img-fluid" src={contact} alt=""/>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default Contact;

