import React from 'react';
import './index.css';

const AboutUs = () => {
    return (
        <div className="container">
            <h1>About Us</h1>
            <p>Welcome to Medico, your trusted partner in healthcare.
            At Medico, we are dedicated to providing the highest quality medical care to our patients. With a team of experienced healthcare professionals and state-of-the-art facilities, we offer a comprehensive range of medical services to address your health needs.
            Our mission is to improve the health and well-being of our community by delivering personalized and compassionate medical care. We understand that each patient is unique, and we strive to provide tailored treatment plans that prioritize your health and comfort.
            Whether you need preventive care, diagnostics, specialized treatments, or consultations, our team is here to support you on your healthcare journey. We are committed to maintaining a patient-centered approach and fostering a welcoming environment where you feel valued and cared for.</p>
            <p>Thank you for choosing Medico for your healthcare needs. We look forward to serving you and helping you achieve your optimal health and wellness.</p>
            <h1 className='team'>Our Team</h1>
            <div className='doctorn'>
                <div>
                    <img className='image' alt='' src='https://static.wixstatic.com/media/536cc69924d547bd90bb77c8456904ec.jpg/v1/fill/w_380,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/536cc69924d547bd90bb77c8456904ec.jpg'/>
                    <h1 className='doctor-name'>Rosemarie Stein D.O <br/> Chief Medical Officer</h1>
                    <h1 className='doctor-email'>rosemaries@medico.com</h1>
                    <p className='para'>Dr. Rosemarie Stein, D.O., is a dedicated osteopathic physician <br/> known for her compassionate patient care <br/> and holistic approach to medicine.</p>
                </div>
                <div>
                    <img className='image' alt='' src='https://static.wixstatic.com/media/1aadec62089b4b40aa2f72d4d2b8e14e.jpg/v1/fill/w_269,h_344,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/1aadec62089b4b40aa2f72d4d2b8e14e.jpg'/>
                    <h1 className='doctor-name'>Joel Adams D.O <br/> Medical Director</h1>
                    <h1 className='doctor-email'>joeladams@medico.com</h1>
                    <p className='para'>Dr. Joel Adams, D.O., is a highly regarded osteopathic physician known <br/> for his compassionate patient-centered <br/>approach to healthcare. </p>
                </div>
                
            </div>
        </div>
    );
};

export default AboutUs;
