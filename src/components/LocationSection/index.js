import React, { Fragment } from 'react';
import { styWrapper } from './styles';

function LocationSection() {
  // Enlace directo para abrir en la app de Google Maps
  const UBICACION_GOOGLE_MAPS = "https://maps.app.goo.gl/9zZp5xGatYp6uWvU8"; // Ejemplo para Salón Gelem

  return (
    <Fragment>
      <div id="fh5co-couple-story" css={styWrapper} style={{ 
        padding: '100px 0',
        backgroundColor: '#ffffff',
        backgroundImage: 'linear-gradient(to bottom, #ffffff 0%, #fffaf5 100%)',
        position: 'relative'
      }}>
        
        <div className="container">
          <div className="col-md-10 col-md-offset-1 text-center fh5co-heading" style={{ marginBottom: '60px' }}>
  {/* Título con más espacio entre letras para que se vea ligero */}
  <h4 className="sub-title" style={{ 
    color: '#B58D56', 
    fontSize: '1.6rem', 
    letterSpacing: '5px', // Más espacio aquí para "distender"
    textTransform: 'uppercase',
    marginBottom: '15px' 
  }}>
    ¿Dónde será la
  </h4>
  
  <h2 className="main-font" style={{ 
    color: '#8B6B4A', 
    fontSize: '5.5rem', // Un poco más grande para que destaque
    margin: '0', 
    fontWeight: 'normal' 
  }}>
    Celebración?
  </h2>

  {/* Divisor más largo para ocupar más espacio horizontal */}
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '40px 0' }}>
    <div style={{ width: '100px', height: '1px', background: 'linear-gradient(to right, transparent, #B58D56, transparent)' }}></div>
    <span style={{ margin: '0 20px', color: '#B58D56', fontSize: '1.5rem', opacity: 0.7 }}>✦</span>
    <div style={{ width: '100px', height: '1px', background: 'linear-gradient(to left, transparent, #B58D56, transparent)' }}></div>
  </div>

  {/* Información del Salón: Quitamos el fondo sólido por uno casi invisible */}
  <div style={{
    padding: '20px',
    display: 'block',
    marginBottom: '20px'
  }}>
    <h3 style={{ 
      color: '#8B6B4A', 
      fontFamily: 'serif', 
      fontSize: '2.4rem', 
      marginBottom: '20px',
      letterSpacing: '1px'
    }}>
      Salón de Eventos Gelem
    </h3>
    
    <p style={{ 
      color: '#5D4037', 
      fontStyle: 'italic', 
      fontSize: '1.5rem', 
      lineHeight: '2', // Mayor interlineado para que el texto se vea relajado
      maxWidth: '500px',
      margin: '0 auto'
    }}>
      Av. Lakin Sm 259 Maz 441., Benito Juárez, <br />
      Quintana Roo, México.
    </p>
    
    {/* Botón más minimalista: solo bordes o sombra suave */}
    <div style={{ marginTop: '45px' }}>
        <a
          href={UBICACION_GOOGLE_MAPS}
          target="_blank"
          rel="noreferrer"
          style={{ 
            display: 'inline-block',
            backgroundColor: 'transparent',
            color: '#8B6B4A',
            padding: '10px 40px',
            borderRadius: '50px', // Forma de píldora, más moderna y suave
            border: '1.5px solid #8B6B4A', // Botón de línea para que se vea menos pesado
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '1rem',
            letterSpacing: '2px',
            transition: 'all 0.3s ease'
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
          VER EN GOOGLE MAPS
        </a>
    </div>
  </div>
</div>

          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              {/* El mapa con marco tipo cuadro de arte */}
              <div style={{
                padding: '12px',
                backgroundColor: '#fff',
                borderRadius: '30px 5px',
                boxShadow: '0px 20px 40px rgba(133, 94, 94, 0.15)',
                border: '1px solid rgba(181, 141, 86, 0.2)'
              }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.439046755452!2d-86.8778641!3d21.1349179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4c297926b0108d%3A0xe54d9c792403565b!2sSal%C3%B3n%20De%20Eventos%20Gelem!5e0!3m2!1ses-419!2smx!4v1700000000000" // Nota: Genera tu propio iframe embed
                  width="100%"
                  height="400"
                  frameBorder="0"
                  style={{ 
                    borderRadius: '20px 5px',
                    filter: 'grayscale(0.2) contrast(1.1)' // Toque un poco más artístico
                  }}
                  allowFullScreen
                  title="Ubicación Salón Gelem"
                ></iframe>
              </div>
            </div>
          </div>
          
          <div className="row" style={{ marginTop: '50px' }}>
              <div className="col-md-10 col-md-offset-1 text-center">
                  <p className="main-font" style={{ color: '#B58D56', fontSize: '3.5rem', opacity: 0.8 }}>
                      ¡No faltes!
                  </p>
                  <p style={{ color: '#855E5E', fontStyle: 'italic', fontSize: '1.4rem', marginTop: '-10px' }}>
                      Tu presencia es mi mejor regalo.
                  </p>
              </div>
          </div>
        </div>

        {/* Decoración Botánica en las esquinas */}
        <div style={{ position: 'absolute', top: '10%', right: '0', fontSize: '10rem', opacity: 0.03, color: '#B58D56', pointerEvents: 'none' }}>🌿</div>
        <div style={{ position: 'absolute', bottom: '10%', left: '0', fontSize: '10rem', opacity: 0.03, color: '#B58D56', transform: 'scaleX(-1)', pointerEvents: 'none' }}>🌿</div>
      </div>
    </Fragment>
  );
}

export default React.memo(LocationSection);