import React, { useState } from 'react';
import { FiX, FiZoomIn } from 'react-icons/fi';
import { GiMedicalDrip } from 'react-icons/gi';
import './Gallery.css';

const images = [
  { src: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&q=80', caption: 'Modern Reception', span: 'wide' },
  { src: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&q=80', caption: 'Dental Consultation' },
  { src: 'https://images.unsplash.com/photo-1588776814546-1ffbb072d4a4?w=600&q=80', caption: 'Dental Equipment' },
  { src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80', caption: 'Neurosurgery Suite', span: 'tall' },
  { src: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80', caption: 'Doctor Consultation' },
  { src: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&q=80', caption: 'MRI Diagnostics' },
  { src: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80', caption: 'Specialist Care' },
  { src: 'https://images.unsplash.com/photo-1601925228008-d01df6f2b8d5?w=600&q=80', caption: 'Smile Design' },
  { src: 'https://images.unsplash.com/photo-1613490403024-66aefbb59b28?w=600&q=80', caption: 'Orthodontics', span: 'wide' },
  { src: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=600&q=80', caption: 'Pediatric Care' },
  { src: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600&q=80', caption: 'Post-Op Recovery' },
  { src: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&q=80', caption: 'Patient Room' },
];

const Gallery = () => {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="gallery" className="gallery section-padding bg-ivory">
      <div className="container">
        <div className="section-center" data-aos="fade-up">
          <span className="section-tag"><GiMedicalDrip size={14} /> Gallery</span>
          <h2 className="section-title">Clinic Gallery</h2>
          <div className="gold-divider center"></div>
          <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
            A glimpse into our world-class clinic — modern facilities, compassionate care, and premium patient experiences.
          </p>
        </div>

        <div className="gallery-masonry">
          {images.map((img, i) => (
            <div
              key={i}
              className={`gallery-item${img.span === 'wide' ? ' wide' : img.span === 'tall' ? ' tall' : ''}`}
              data-aos="zoom-in"
              data-aos-delay={`${(i % 4) * 60}`}
              onClick={() => setLightbox(img)}
              role="button"
              tabIndex={0}
              onKeyDown={e => e.key === 'Enter' && setLightbox(img)}
              aria-label={`View ${img.caption}`}
            >
              <img src={img.src} alt={img.caption} loading="lazy" />
              <div className="gallery-overlay">
                <FiZoomIn size={24} className="gallery-zoom-icon" />
                <span className="gallery-caption">{img.caption}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" onClick={() => setLightbox(null)} aria-label="Close"><FiX size={24} /></button>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <img src={lightbox.src.replace('w=600', 'w=1200')} alt={lightbox.caption} />
            <p className="lightbox-caption">{lightbox.caption}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
