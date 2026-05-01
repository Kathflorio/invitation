import React from 'react';
import { string, bool } from 'prop-types';
import { Link } from 'gatsby';

import { styWrapper } from './styles';

function ConfirmationSection({ isInvitation, guestName, codeLink }) {
  // CONFIGURACIÓN DE WHATSAPP
  const phoneNumber = '529984639108';
  const message = `¡Hola! Es un honor para mí confirmar mi asistencia para acompañar a Scarlet Joseline en la celebración de sus XV Años. ¡Muchas gracias por la invitación! ✨`;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div
      id="fh5co-started"
      css={styWrapper}
      style={{
        padding: '60px 0', // Reducido de 100px a 60px
        backgroundColor: '#ffffff',
        backgroundImage: 'linear-gradient(to bottom, #ffffff 0%, #fffaf5 100%)',
        textAlign: 'center',
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
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
              Confirmación
            </h4>

            <h2
              className="main-font"
              style={{
                color: '#8B6B4A',
                fontSize: '5.5rem', // Reducido de 4.5rem para mayor compacidad
                margin: '0',
                lineHeight: '1.1',
              }}
            >
              {guestName ? `¿Nos acompañas, ${guestName}?` : '¿Nos acompañas?'}
            </h2>

            {/* Divisor más compacto */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '20px 0' }}>
              {' '}
              {/* Reducido de 35px */}
              <div
                style={{
                  width: '60px', // Más corto
                  height: '1px',
                  background: 'linear-gradient(to right, transparent, #B58D56, transparent)',
                }}
              ></div>
              <div
                style={{
                  width: '8px',
                  height: '8px',
                  backgroundColor: '#B58D56',
                  transform: 'rotate(45deg)',
                  margin: '0 10px',
                  opacity: 0.7,
                }}
              ></div>
              <div
                style={{
                  width: '60px',
                  height: '1px',
                  background: 'linear-gradient(to left, transparent, #B58D56, transparent)',
                }}
              ></div>
            </div>

            <p
              style={{
                color: '#5D4037',
                fontStyle: 'italic',
                fontSize: '1.15rem', // Un poco más pequeño
                lineHeight: '1.6',
                fontFamily: 'serif',
                maxWidth: '500px',
                margin: '0 auto 30px auto', // Reducido margen inferior de 50px a 30px
              }}
            >
              "Tu presencia es el mejor regalo para mí en esta noche tan especial. Por favor, confirma tu asistencia
              para recibirte con alegría."
            </p>

            {/* CONTENEDOR DE BOTONES */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '12px', // Espacio entre botones reducido
                marginTop: '10px',
              }}
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', width: '100%', maxWidth: '280px' }}
              >
                <button
                  style={{
                    backgroundColor: '#8B6B4A',
                    color: '#fff',
                    padding: '12px 25px', // Botón más esbelto
                    borderRadius: '50px',
                    border: 'none',
                    fontSize: '0.9rem',
                    fontWeight: 'bold',
                    letterSpacing: '1px',
                    width: '100%',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    boxShadow: '0 6px 12px rgba(139, 107, 74, 0.15)',
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
                  onMouseOut={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
                >
                  CONFIRMAR POR WHATSAPP
                </button>
              </a>

              {isInvitation && (
                <Link to={`e-ticket?${codeLink}`} style={{ textDecoration: 'none', width: '100%', maxWidth: '280px' }}>
                  <button
                    style={{
                      backgroundColor: 'transparent',
                      color: '#8B6B4A',
                      padding: '10px 20px',
                      borderRadius: '50px',
                      border: '1px solid #8B6B4A',
                      fontSize: '0.8rem',
                      fontWeight: 'bold',
                      letterSpacing: '1px',
                      width: '100%',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(139, 107, 74, 0.05)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }}
                  >
                    VER MI PASE DIGITAL
                  </button>
                </Link>
              )}
            </div>

            <div
              style={{
                marginTop: '40px', // Reducido drásticamente de 80px
                fontFamily: 'serif',
                fontSize: '1.5rem',
                color: '#B58D56',
                opacity: 0.6,
                letterSpacing: '2px',
              }}
            >
              Scarlet Joseline
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ConfirmationSection.propTypes = {
  codeLink: string.isRequired,
  isInvitation: bool.isRequired,
  guestName: string.isRequired,
};

export default React.memo(ConfirmationSection);
