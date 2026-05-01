import React, { Fragment } from 'react';
import { bool } from 'prop-types';

function FooterSection({ isInvitation }) {
  return (
    <Fragment>
      <footer
        id="fh5co-footer"
        role="contentinfo"
        style={{
          padding: '60px 0 40px 0',
          backgroundColor: '#fffaf5', // Fondo cálido sutil para dar cierre
          borderTop: '1px solid rgba(181, 141, 86, 0.2)', // Línea en color dorado tenue
          textAlign: 'center',
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {/* Elemento Decorativo */}
              <div style={{ marginBottom: '25px', color: '#B58D56', fontSize: '1.4rem' }}>✦</div>

              <div className="copyright">
                <p style={{ margin: 0, color: '#5D4037', fontFamily: 'serif' }}>
                  <small
                    style={{
                      fontSize: '0.90rem',
                      letterSpacing: '1px',
                      opacity: 0.8,
                    }}
                  >
                    &copy; 2026 • Diseñado con cariño por
                    <span
                      style={{
                        color: '#B58D56',
                        fontWeight: 'bold',
                        marginLeft: '5px',
                        letterSpacing: '1px',
                      }}
                    >
                      Katherine Florio
                    </span>
                  </small>
                </p>
              </div>

              {/* Frase final en itálicas con el tono café de la invitación */}
              <p
                style={{
                  marginTop: '20px',
                  fontStyle: 'italic',
                  color: '#5D4037',
                  fontSize: '0.95rem',
                  opacity: 0.6,
                  fontFamily: 'serif',
                }}
              >
                "Celebrando quince años de vida y amor."
              </p>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}

FooterSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default React.memo(FooterSection);
