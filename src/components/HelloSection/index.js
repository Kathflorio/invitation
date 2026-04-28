import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import { styWrapper } from './styles';

function HelloSection({ isInvitation }) {
  const finalSubtitle = 'Sábado, 23 de Mayo 2026'; 

  return (
    <Fragment>
      <div id="fh5co-couple" css={styWrapper} style={{ padding: '60px 0' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2 className="main-font" style={{ fontSize: '4.5rem', color: '#855E5E' }}>¡Mis XV Años!</h2>
              <h3 className="sub-title hs" style={{ color: '#855E5E', opacity: 0.8 }}>{finalSubtitle}</h3>
              
              <p className="info" style={{ 
                fontStyle: 'italic', 
                fontSize: '1.2rem', 
                color: '#5D4037', 
                lineHeight: '1.8', 
                maxWidth: '700px', 
                margin: '20px auto 40px auto' 
              }}>
                "Hoy mi corazón se llena de gratitud al celebrar el inicio de este nuevo camino. 
                Doy gracias a Dios por la bendición de la vida y por el amor de mi familia. 
                Es un honor para mí invitarlos a compartir la magia de mis XV años."
              </p>
            </div>
          </div>
          
          <div className="row" style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="col-md-6 text-center">
              {/* Tarjeta con el sombreado bonito que mencionaste */}
              <div style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.6)', 
                padding: '40px 20px', 
                borderRadius: '30px', 
                boxShadow: '0 15px 35px rgba(133, 94, 94, 0.15)', // Sombreado elegante
                border: '1px solid rgba(255, 183, 178, 0.3)'
              }}>
                <div className="item" style={{ marginBottom: '25px' }}>
                  {/* Círculo con emoticón y sombreado de profundidad */}
                  <div style={{ 
                    margin: '0 auto', 
                    borderRadius: '50%', 
                    width: '180px', 
                    height: '180px', 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'white',
                    fontSize: '70px',
                    border: '4px solid white',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.08)' // Sombreado del círculo
                  }}>
                    🌸
                  </div>
                </div>
                
                <div className="desc-quinceanera">
                  <h3 className="main-font" style={{ fontSize: '3.5rem', color: '#855E5E', marginBottom: '10px' }}>
                    Joseline Scarlet Hernández Florio
                  </h3>
                  
                  <hr style={{ width: '60px', border: '1px solid #FFB7B2', margin: '20px auto' }} />
                  
                  <p className="parent-name" style={{ color: '#855E5E', fontSize: '1.1rem', lineHeight: '1.6' }}>
                    <strong style={{ display: 'block', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                      En compañía de mis padres:
                    </strong>
                    <span style={{ color: '#5D4037' }}>Sr. Josue Hernández</span> <br />
                    <span style={{ color: '#5D4037' }}>& Sra. Maria Selene Florio Suriano</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </Fragment>
  );
}

HelloSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default HelloSection;