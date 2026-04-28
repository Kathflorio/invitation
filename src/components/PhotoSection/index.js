import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { photos } from './photo-data';

function PhotoSection() {
  return (
    <div id="fh5co-testimonial" style={{ padding: '80px 0', backgroundColor: '#fffcfc' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
            {/* Hashtag en Rosa Pastel Girly */}
            <h2 className="main-font" style={{ color: '#FFB7B2', fontSize: '3.5rem', marginBottom: '10px' }}>
              #MisXVAnos
            </h2>
            
            {/* Tu frase en el Café suave que venimos manejando (#855E5E) */}
            <p className="sub-title" style={{ 
              color: '#855E5E', 
              fontStyle: 'italic', 
              fontSize: '1.3rem', 
              lineHeight: '1.6',
              fontWeight: '400'
            }}>
              "Hay momentos en la vida que son especiales por sí solos, <br />
              pero compartirlos con las personas que amas los hace inolvidables."
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-10 col-md-offset-1">
            {/* Contenedor de la galería con marco elegante */}
            <div style={{ 
              border: '10px solid #fdf2f2', 
              borderRadius: '20px', 
              overflow: 'hidden',
              boxShadow: '0px 15px 35px rgba(133, 94, 94, 0.1)' // Sombra sutil en tono café
            }}>
              <ImageGallery 
                items={photos} 
                showBullets={true} 
                showPlayButton={false} 
                showFullscreenButton={true}
                slideDuration={450}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotoSection;