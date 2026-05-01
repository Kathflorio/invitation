import React from 'react';
import { photos } from './photo-data';

function PhotoSection() {
  // Configuración de la cuadrícula uniforme y simétrica
  const gridStyle = {
    display: 'grid',
    // Mantenemos las 3 columnas pero ajustamos el gap para que se vea más distendido
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px',
    padding: '20px',
    maxWidth: '1100px',
    margin: '0 auto',
  };

  return (
    <div
      id="fh5co-testimonial"
      style={{
        padding: '100px 0',
        backgroundColor: '#ffffff',
        // Color de base unificado con las demás secciones (crema muy suave al final)
        backgroundImage: 'linear-gradient(to bottom, #ffffff 0%, #fffaf5 100%)',
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-md-offset-1 text-center fh5co-heading" style={{ marginBottom: '60px' }}>
            {/* Saludo superior - Color Bronce unificado */}
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
              Galería de
            </h4>

            {/* Título principal - Color Café Josseline */}
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
              Recuerdos
            </h2>

            {/* Divisor Distendido con Diamante */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '40px 0' }}>
              <div
                style={{
                  width: '80px',
                  height: '1px',
                  background: 'linear-gradient(to right, transparent, #B58D56, transparent)',
                }}
              ></div>
              <span
                style={{
                  margin: '0 20px',
                  color: '#B58D56',
                  fontSize: '1.5rem',
                  transform: 'rotate(45deg)',
                  display: 'inline-block',
                  opacity: 0.8,
                }}
              >
                <div style={{ width: '10px', height: '10px', backgroundColor: '#B58D56' }}></div>
              </span>
              <div
                style={{
                  width: '80px',
                  height: '1px',
                  background: 'linear-gradient(to left, transparent, #B58D56, transparent)',
                }}
              ></div>
            </div>

            {/* Frase con tipografía Serif unificada */}
            <p
              style={{
                color: '#5D4037', // Café oscuro para legibilidad
                fontStyle: 'italic',
                fontSize: '2.25rem',
                lineHeight: '1.8',
                fontWeight: '300',
                maxWidth: '650px',
                margin: '0 auto',
                fontFamily: 'serif',
              }}
            >
              "Hay momentos en la vida que son especiales por sí solos, <br />
              pero compartirlos con las personas que amas los hace{' '}
              <span style={{ color: '#B58D56', fontWeight: '600', fontSize: '2.25rem' }}>inolvidables</span>."
            </p>
          </div>
        </div>

        <div className="galeria-adaptativa">
          {photos.map((photo, index) => (
            <div key={index} className="galeria-item">
              <img
                src={photo.original}
                alt={`Scarlet XV ${index}`}
                className="galeria-img"
                onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />
            </div>
          ))}

          <style>{`
    /* --- MÓVIL: Carrusel deslizable --- */
    .galeria-adaptativa {
      display: flex;
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      gap: 15px;
      padding: 20px;
      scrollbar-width: none;
    }

    .galeria-adaptativa::-webkit-scrollbar {
      display: none;
    }

    .galeria-item {
      flex: 0 0 80%; /* En móvil cada foto ocupa el 80% */
      scroll-snap-align: center;
      aspect-ratio: 1 / 1;
      overflow: hidden;
      border-radius: 15px 4px;
      box-shadow: 0 10px 25px rgba(139, 107, 74, 0.1);
      border: 1px solid rgba(181, 141, 86, 0.15);
      background-color: #fff;
    }

    /* --- DESKTOP: Grid controlado --- */
    @media (min-width: 768px) {
      .galeria-adaptativa {
        display: grid;
        /* Evita que se estiren: máximo 3 o 4 columnas */
        grid-template-columns: repeat(auto-fit, minmax(250px, 320px)); 
        justify-content: center; /* Centra las fotos si sobran espacios */
        grid-auto-flow: row;
        overflow-x: visible;
        gap: 25px;
        padding: 40px 20px;
        max-width: 1200px; /* Evita que la galería se expanda en monitores ultra anchos */
        margin: 0 auto;    /* Centra todo el bloque de la galería */
      }

      .galeria-item {
        flex: none;
        width: 100%;
        max-width: 320px; /* Aquí controlas el tamaño máximo real de cada foto */
        margin: 0 auto;
      }
    }

    .galeria-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transition: transform 0.6s ease;
    }
  `}</style>
        </div>
      </div>

      {/* Pie de galería distendido */}
      <div className="text-center" style={{ marginTop: '60px' }}>
        <p
          style={{
            color: '#B58D56',
            fontFamily: 'serif',
            fontStyle: 'italic',
            fontSize: '1.2rem',
            letterSpacing: '1px',
          }}
        >
          Momentos capturados para siempre
        </p>
      </div>
    </div>
  );
}

export default PhotoSection;
