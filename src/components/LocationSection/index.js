import React, { Fragment } from 'react';
import { styWrapper } from './styles';

function LocationSection() {
  // Enlace directo a la ficha del Salón Gelem que proporcionaste
  const UBICACION_GOOGLE_MAPS =
    'https://www.google.com/maps/place/Sal%C3%B3n+de+Eventos+Gelem/@21.1476388,-86.9054527,17z/';

  return (
    <Fragment>
      <div
        id="location"
        css={styWrapper}
        style={{
          padding: '60px 0',
          backgroundColor: '#ffffff',
          backgroundImage: 'linear-gradient(to bottom, #ffffff 0%, #fffaf5 100%)',
          textAlign: 'center',
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <h4
                className="sub-title"
                style={{
                  color: '#B58D56',
                  fontSize: '1.6rem',
                  letterSpacing: '5px',
                  textTransform: 'uppercase',
                  marginBottom: '15px',
                }}
              >
                ¿Dónde celebraremos?
              </h4>

              <h2
                className="main-font"
                style={{
                  color: '#8B6B4A',
                  fontSize: '5.5rem',
                  margin: '0',
                  lineHeight: '1',
                  fontWeight: 'normal',
                }}
              >
                Ubicación
              </h2>

              <div style={{ marginBottom: '30px' }}>
                <h3
                  style={{
                    color: '#8B6B4A',
                    fontFamily: 'serif',
                    fontSize: '1.8rem',
                    margin: '0 0 10px 0',
                  }}
                >
                  Salón de Eventos Gelem
                </h3>
                <p
                  style={{
                    color: '#5D4037',
                    fontStyle: 'italic',
                    fontSize: '1.1rem',
                    lineHeight: '1.5',
                  }}
                >
                  Av. Lak'in 44-01, Privada San Andrés, <br />
                  SM 259, 77539 Cancún, Q.R.
                </p>
              </div>

              {/* Mapa Interactivo con coordenadas reales */}
              <div
                style={{
                  padding: '10px',
                  backgroundColor: '#fff',
                  borderRadius: '15px 4px',
                  boxShadow: '0px 15px 35px rgba(139, 107, 74, 0.1)',
                  border: '1px solid rgba(181, 141, 86, 0.2)',
                  marginBottom: '30px',
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.8930438135!2d-86.9080276!3d21.1476388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4dd516eb5d436f%3A0x64e4f7d02413228a!2sSal%C3%B3n%20de%20Eventos%20Gelem!5e0!3m2!1ses-419!2smx!4v1714546800000"
                  width="100%"
                  height="350"
                  style={{
                    border: 0,
                    borderRadius: '10px 2px',
                    filter: 'sepia(0.1) contrast(1.05)',
                  }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa Salón Gelem"
                ></iframe>
              </div>

              <a
                href={UBICACION_GOOGLE_MAPS}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-block',
                  backgroundColor: 'transparent',
                  color: '#8B6B4A',
                  padding: '12px 35px',
                  borderRadius: '4px',
                  border: '1.2px solid #8B6B4A',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  fontSize: '0.85rem',
                  letterSpacing: '2px',
                  transition: 'all 0.3s ease',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#8B6B4A';
                  e.currentTarget.style.color = '#fff';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#8B6B4A';
                }}
              >
                ¿CÓMO LLEGAR?
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default React.memo(LocationSection);
