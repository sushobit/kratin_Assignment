import React from 'react';
import DoctorCard from '../DoctorsList'; 
import './index.css';

const Doctors = () => {
    return (
        <div className="container">
            <h1>Doctors List</h1>
            <div className='doctor-container'>
            <div className="doctor-list">
                <DoctorCard
                    imageSrc="https://media.istockphoto.com/id/1327024466/photo/portrait-of-male-doctor-in-white-coat-and-stethoscope-standing-in-clinic-hall.jpg?s=612x612&w=0&k=20&c=49wqOwwuonk9f8NACL7M_5RosqQPFwJ8-dpmeo9AvQw="
                    name="Dr. John Smith"
                    specialties="Cardiology"
                    expertise="Heart Health"
                    experience={15}
                />
                <DoctorCard
                    imageSrc="https://media.istockphoto.com/id/1390000431/photo/shot-of-a-mature-doctor-using-a-digital-tablet-in-a-modern-hospital.webp?b=1&s=170667a&w=0&k=20&c=Jxhk_KZSo9oSZ01Nv8TxjCKKEVZQJFVWICZb64AEIMQ="
                    name="Dr. Justin P. Annes"
                    specialties="Orthopedics"
                    expertise="Musculoskeletal System"
                    experience={19}
                />
                <DoctorCard
                    imageSrc="https://media.istockphoto.com/id/1267013330/photo/portrait-of-a-confident-young-female-doctor-at-work.jpg?s=612x612&w=0&k=20&c=_E-ImNGq8ZRzCq3QcKxDjXtk3OWPOvMqzddjGzlad9U="
                    name="Dr. Emily Brown"
                    specialties="Dermatology"
                    expertise="Skin Care"
                    experience={10}
                />
                <DoctorCard
                    imageSrc="https://med.stanford.edu/neurology/divisions/memory/team/_jcr_content/main/tabs/tab_main_tabs_0/text_image_3.img.620.high.jpg/frank-longo.jpg"
                    name="Dr. Laurence Katznelson"
                    specialties="Gastroenterology"
                    expertise="Digestive System"
                    experience={26}
                />
                <DoctorCard
                    imageSrc="https://stanfordmedicine25.stanford.edu/about/_jcr_content/main/panel_builder/panel_0/panel_builder_0/panel_0/text_image_4.img.620.high.jpg/AEversion2.jpg"
                    name="Dr. Neil Gesundheit"
                    specialties="Endocrinology"
                    expertise="Endocrine System"
                    experience={31}
                />
                <DoctorCard
                    imageSrc="https://wearememorial.com/wp-content/uploads/2022/01/Stanford-Onellis.jpg"
                    name="Dr. Chrysoula Dosiou"
                    specialties="Pediatrics"
                    expertise="Pediatric Diseases"
                    experience={14}
                />
                <DoctorCard
                    imageSrc="https://stanfordhealthcare.org/content/dam/SHC/doctors-medicalstaff/c/chang-julia-md.jpg/_jcr_content/renditions/original.transform/280x280-q76/image.jpg"
                    name="Dr. Julia J. Chang"
                    specialties="Neurology"
                    expertise="Nervous System"
                    experience={16}
                />
                <DoctorCard
                    imageSrc="https://www.hoafredericksburg.com/wp-content/uploads/2016/08/Stanford_0836-scaled.jpg"
                    name="Dr. Tracey McLaughlin"
                    specialties="Psychiatry"
                    expertise="Mental Health"
                    experience={15}
                />
                <DoctorCard
                    imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGRr2PzxFJwuY4D4Ki--vD4fDvCUDdLFsXMA&usqp=CAU"
                    name="Dr. Peter Michael Sklarin"
                    specialties="Gastroenterology"
                    expertise="Digestive System"
                    experience={19}
                />        
            </div>
            </div>
        </div>
    );
};

export default Doctors;
