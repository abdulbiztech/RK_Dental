import React from 'react';
import './Appointment.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { AiFillHome } from "react-icons/ai";
import ContactForm from '../../components/ContactForm/ContactForm';

const Appointment = () => {
    // Update the map link to the new Mumbai location
    const mapLink = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15073.40739305411!2d72.87704262968993!3d19.071682569180125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf226ceeb271%3A0xe2fb255764b727c8!2sShop%20No.%205%2C%20Hi-tech%20Premises%20Co-op%20Hsg.%20Soc.%2C%20Vinoba%20Bhave%20Nagar%2C%20Mumbai%2C%20Maharashtra%20400070!5e0!3m2!1sen!2sin!4v1693483229927!5m2!1sen!2sin';

    return (
        <section className='appointment-section pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-6">
                        <div className="google-map">
                            {/* Embed Google Map with the updated link */}
                            <iframe 
                                title='map' 
                                src={mapLink}
                                width="100%"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen="" 
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>

                            <div className="location-name">
                                <AiFillHome />
                                <p>Shop No. 5, Hi-tech Premises Co-op Hsg. Soc., Vinoba Bhave Nagar, Mumbai, Maharashtra 400070</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-6">
                        <div className="appointment-form-area">
                            <SectionTitle 
                                subTitle="BOOK APPOINTMENT"
                                title="Care at R K Dental Care is pleasure"
                                description="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual"
                            />

                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appointment;
