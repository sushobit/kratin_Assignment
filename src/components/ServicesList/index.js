import React from 'react';
import Service from '../Services';
import './index.css';

const serviceList = () => {
    const services = [
        {
            title: 'Emergency Care',
            description: '24/7 emergency medical services.',
            imageSrc: 'https://www.sriramakrishnahospital.com/wp-content/uploads/2022/05/Importance-of-first-aid.png',
        },
        {
            title: 'Surgery',
            description: 'State-of-the-art surgical procedures.',
            imageSrc: 'https://domf5oio6qrcr.cloudfront.net/medialibrary/10398/conversions/GettyImages-1183048938-thumb.jpg',
        },
        {
            title: 'Radiology',
            description: 'Advanced imaging and diagnostics.',
            imageSrc: 'https://cdn-prod.medicalnewstoday.com/content/images/articles/327/327331/a-radiologist-busy-looking-at-some-x-rays.jpg',
        },
        {
            title: 'Cardiology',
            description: 'Fully Heart check-ups',
            imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIdutBUrnKsibVPVQweSyhQUglo3TF-JGZfA&usqp=CAU',
        },
        {
            title: 'Intensive Care Unit (ICU)',
            description: 'Critical care services & Ventilator support',
            imageSrc: 'https://apollohealthlib.blob.core.windows.net/health-library/2019/06/Critical-Care-Unit.jpg',
        },
        {
            title: 'Gastroenterology',
            description: 'Endoscopy, Gastrointestinal diagnostics',
            imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA6_S1ITfJXSwy4TGYUxtu8SptWPuswxMHK0a5a42z39Nx2DnFkumiuTlzQXVkwGp4r-w&usqp=CAU',
        },
    ];

    return (
        <div className="servicecard">
            <h1>Hospital Services</h1>
            <div className="services-container">
                {services.map((service, index) => (
                    <Service
                        key={index}
                        title={service.title}
                        description={service.description}
                        imageSrc={service.imageSrc}
                    />
                ))}
            </div>
        </div>
    );
};

export default serviceList;
