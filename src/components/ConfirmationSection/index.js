import React from 'react';
import { string, bool } from 'prop-types';
import { Link } from 'gatsby';

import { styWrapper } from './styles';

function ConfirmationSection({ isInvitation, guestName, codeLink }) {
  return (
    <div id="fh5co-started" css={styWrapper} style={{ 
      padding: '100px 0',
      backgroundColor: '#ffffff', // Fondo limpio, sin overlays oscuros
      backgroundImage: 'linear-gradient(to bottom, #ffffff 0%, #fffaf5 100%)',
      textAlign: 'center'
    }}>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            
            {/* Título ligero y aireado */}
            <h4 className="sub-title" style={{ 
              color: '#B58D56', 
              fontSize: '1.5rem', 
              letterSpacing: '4px', 
              textTransform: 'uppercase',
              marginBottom: '20px'
            }}>
              Confirmación
            </h4>

            <h2 className="main-font" style={{ 
              color: '#8B6B4A', 
              fontSize: '4.5rem', 
              margin: '0',
              lineHeight: '1.2'
            }}>
              {guestName ? `¿Nos acompañas, ${guestName}?` : '¿Nos acompañas?'}
            </h2>

            {/* Divisor de diamante distendido */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '35px 0' }}>
              <div style={{ width: '80px', height: '1px', background: 'linear-gradient(to right, transparent, #B58D56, transparent)' }}></div>
              <div style={{ 
                width: '10px', 
                height: '10px', 
                backgroundColor: '#B58D56', 
                transform: 'rotate(45deg)', 
                margin: '0 15px',
                opacity: 0.7 
              }}></div>
              <div style={{ width: '80px', height: '1px', background: 'linear-gradient(to left, transparent, #B58D56, transparent)' }}></div>
            </div>

            <p style={{ 
              color: '#5D4037', 
              fontStyle: 'italic', 
              fontSize: '1.3rem', 
              lineHeight: '1.8',
              fontFamily: 'serif',
              maxWidth: '550px',
              margin: '0 auto 50px auto'
            }}>
              "Tu presencia es el mejor regalo para mí en esta noche tan especial. 
              Por favor, confirma tu asistencia para recibirte con alegría."
            </p>

            {/* Botón Estilo Boutique */}
            {isInvitation && (
              <div style={{ marginTop: '20px' }}>
                <Link to={`e-ticket?${codeLink}`} style={{ textDecoration: 'none' }}>
                  <button style={{
                    backgroundColor: 'transparent',
                    color: '#8B6B4A',
                    padding: '12px 40px',
                    borderRadius: '50px',
                    border: '1.5px solid #8B6B4A',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    letterSpacing: '2px',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
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
                    VER MI PASE DIGITAL
                  </button>
                </Link>
              </div>
            )}
            
            {/* Firma final suave */}
            <div style={{ 
              marginTop: '80px', 
              fontFamily: 'serif', 
              fontSize: '1.8rem', 
              color: '#B58D56',
              opacity: 0.6,
              letterSpacing: '2px'
            }}>
              Josseline Scarlet
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