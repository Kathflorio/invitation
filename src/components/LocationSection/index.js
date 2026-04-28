import React, { Fragment } from 'react';
import { styWrapper } from './styles';
// Si tienes una imagen de un mapa personalizado, mantenla, si no, puedes comentarla
// import Peta from '@assets/images/peta.jpeg'; 

function LocationSection() {
  // Cambia este enlace por la ubicación real de tu evento en Google Maps
  const UBICACION_GOOGLE_MAPS = "https://goo.gl/maps/tu-enlace-aqui";

  return (
    <Fragment>
      <div id="fh5co-couple-story" className="fh5co-section-gray" css={styWrapper} style={{ backgroundColor: '#fffcfc' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
              {/* Título en español con estilo rosita/café */}
              <h2 className="main-font" style={{ color: '#855E5E' }}>Ubicación del Evento</h2>
              <p className="sub-title">
                <a
                  href={UBICACION_GOOGLE_MAPS}
                  title="Click para ver en Google Maps"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: '#FFB7B2', fontWeight: 'bold' }}
                >
                  📍 Salón de Eventos [Nombre del Salón]
                </a>{' '}
                <br />
                <span style={{ color: '#828282', fontStyle: 'italic' }}>
                  Calle Ficticia #123, Colonia Centro <br />
                  Ciudad, Estado.
                </span>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              {/* El mapa de Google Maps */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.308256422312!2d-103.3516568!3d20.6569784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDM5JzI1LjEiTiAxMDPCsDIxJzA2LjAiVw!5e0!3m2!1ses!2smx!4v1715800000000!5m2!1ses!2smx"
                width="100%"
                height="450"
                frameBorder="0"
                style={{ 
                  border: '5px solid #FFB7B2', 
                  borderRadius: '15px',
                  boxShadow: '0px 4px 15px rgba(0,0,0,0.1)' 
                }}
                allowFullScreen
                aria-hidden="false"
                tabIndex="0"
                title="Google Maps - Mis XV Años"
              ></iframe>
            </div>
          </div>
          
          {/* Si quieres poner una imagen bonita debajo del mapa, usa este bloque */}
          <div className="row" style={{ marginTop: '30px' }}>
              <div className="col-md-10 col-md-offset-1 text-center">
                  <p style={{ color: '#855E5E', fontStyle: 'italic' }}>
                      ¡Te esperamos para celebrar juntos!
                  </p>
              </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default React.memo(LocationSection);