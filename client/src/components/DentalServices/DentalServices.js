import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { GiTooth } from 'react-icons/gi';
import {
  MdOutlineCleanHands, MdOutlineMedicalServices, MdOutlineLocalHospital,
  MdFace, MdOutlineDesignServices, MdOutlineMedication,
  MdChildFriendly, MdFlashOn, MdWarning, MdOutlineFace
} from 'react-icons/md';
import { TbDental, TbDentalOff } from 'react-icons/tb';
import { BsScissors, BsTools } from 'react-icons/bs';
import { dentalServices } from '../../data/servicesData';
import './DentalServices.css';

const iconMap = {
  'general-dentistry': <MdOutlineCleanHands size={30}/>,
  'preventive-dentistry': <MdOutlineMedicalServices size={30}/>,
  'restorative-dentistry': <BsTools size={28}/>,
  'endodontics': <GiTooth size={28}/>,
  'cosmetic-dentistry': <MdFace size={30}/>,
  'prosthodontics': <MdOutlineDesignServices size={30}/>,
  'orthodontics': <MdOutlineMedication size={30}/>,
  'periodontics': <MdOutlineLocalHospital size={30}/>,
  'oral-surgery': <BsScissors size={26}/>,
  'dental-implants': <TbDental size={30}/>,
  'pediatric-dentistry': <MdChildFriendly size={30}/>,
  'laser-dentistry': <MdFlashOn size={30}/>,
  'emergency-dental': <MdWarning size={30}/>,
  'tmj-disorders': <MdOutlineFace size={30}/>,
  'full-mouth-rehab': <TbDentalOff size={28}/>,
};

const DentalServices = () => {
  const navigate = useNavigate();

  return (
    <section id="dental" className="dental-services section-padding bg-beige">
      <div className="container">
        <div className="section-center" data-aos="fade-up">
          <span className="section-tag"><GiTooth size={14} /> Dental Care</span>
          <h2 className="section-title">Dental Services</h2>
          <div className="gold-divider center"></div>
          <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
            From routine check-ups to full smile transformations — our 15 specialized dental services cover every aspect of your oral health with precision and care.
          </p>
        </div>

        <div className="dental-grid">
          {dentalServices.map((s, i) => (
            <div
              key={s.id}
              className="dental-card premium-card"
              data-aos="fade-up"
              data-aos-delay={`${(i % 3) * 100}`}
              onClick={() => navigate(`/services/${s.id}`)}
              role="button"
              tabIndex={0}
              onKeyDown={e => e.key === 'Enter' && navigate(`/services/${s.id}`)}
              aria-label={`View full page for ${s.title}`}
            >
              <div className="dental-card-img">
                <img src={s.image} alt={s.title} loading="lazy" />
                <div className="dental-card-icon-wrap">{iconMap[s.id] || <GiTooth size={28}/>}</div>
              </div>
              <div className="dental-card-body">
                <h4>{s.title}</h4>
                <p>{s.short}</p>
                <span className="dental-learn-more">
                  View Full Page <FiArrowRight size={13} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DentalServices;
