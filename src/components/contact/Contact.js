import React, {useState} from 'react';
import './Contact.css'
import contact from '../../assets/images/contact.jpg'
import axios from "axios";
import swal from 'sweetalert';


function Contact() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const validateEmail = (emailAdress) =>
    {
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (emailAdress.match(regexEmail)) {
            return true;
        } else {
            return false;
        }
    };

    const sendEmail = () => {
        if (email === '' || name === '' || message === '') {
            swal({
                title: "Oops!",
                text: "Please provide valid informations!",
                icon: "error",
            });
            return;
        }
        if (!validateEmail(email)) {
            swal({
                title: "Oops!",
                text: "Please provide a valid email!",
                icon: "error",
            });
            return;
        }
        setLoading(true);
        const data = {
            email: email,
            name: name,
            message: message
        };
        axios({
            method: "POST",
            url: "https://us-central1-lunaprise-dev.cloudfunctions.net/lets_gtok/contact",
            data: data,
        }).then((response) => {
            if (response.data.status === "sent") {
                setEmail('');
                setMessage('');
                setName('');
                setLoading(false);
                swal({
                    title: "Congratulations!",
                    text: "Your email has been sent successfully!",
                    icon: "success",
                });
            } else if (response.data.status === "failed") {
                swal({
                    title: "Oops!",
                    text: "An error has occurred!",
                    icon: "error",
                });
                setLoading(false);
            }
        });
    };
    return (
        <div className="contact-wrapper my-4">
            <h3 className="text-center my-5" data-aos="fade-down">Contact <span
                style={{color: '#6930db', fontWeight: 'bold'}}>Us</span></h3>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 text-center">
                        <label className="col-12 text-center my-3" data-aos="zoom-in" data-aos-delay="200">
                            <input className="contact-input col-10" value={name}
                                   onChange={e => setName(e.target.value)} type="text" placeholder="Name"/>
                        </label>
                        <label className="col-12 text-center my-3" data-aos="zoom-in" data-aos-delay="300">
                            <input className="contact-input col-10" value={email}
                                   onChange={e => setEmail(e.target.value)} type="text" placeholder="Email"/>
                        </label>
                        <label className="col-12 text-center my-3" data-aos="zoom-in" data-aos-delay="400">
                            <textarea className="contact-input col-10" value={message}
                                      onChange={e => setMessage(e.target.value)} rows="4" cols="50" placeholder="Message"/>
                        </label>

                        <button className="button-primary-custom text-center" data-aos="zoom-in"
                                data-aos-delay="500"
                                disabled={loading}
                                onClick={sendEmail}>Send now
                        </button>

                    </div>
                    <div className="col-md-6" data-aos="fade-down">
                        <img className="img-fluid" src={contact} alt=""/>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Contact;

