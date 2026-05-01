import React, { Fragment } from 'react';
import { bool } from 'prop-types';
import { styWrapper } from './styles';

function HelloSection({ isInvitation }) {
  const finalSubtitle = 'Sábado, 23 de Mayo 2026'; 

  return (
    <Fragment>
      <div
        id="fh5co-couple"
        css={styWrapper}
        style={{
          padding: '80px 0',
          background: 'linear-gradient(to bottom, #ffffff 0%, #fff5f5 100%)', // Fondo suave
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h4
                className="sub-title"
                style={{
                  color: '#B58D56',
                  fontSize: '2.2rem',
                  marginBottom: '10px',
                  fontFamily: "'Great Vibes', cursive",
                }}
              >
                Estás cordialmente invitado a
              </h4>
              <h2 className="main-font" style={{ fontSize: '5rem', color: '#855E5E', margin: '0' }}>
                ¡Mis XV Años!
              </h2>
              <h3
                className="sub-title hs"
                style={{
                  color: '#B58D56',
                  letterSpacing: '3px',
                  marginTop: '10px',
                  fontFamily: "'Great Vibes', cursive",
                }}
              >
                {finalSubtitle}
              </h3>

              <div
                style={{ width: '100px', height: '2px', background: '#FFB7B2', margin: '30px auto', opacity: 0.5 }}
              ></div>

              <p
                className="info"
                style={{
                  fontStyle: 'italic',
                  fontSize: '2.25rem',
                  color: '#6d4c41',
                  lineHeight: '1.9',
                  maxWidth: '650px',
                  margin: '0 auto 50px auto',
                  fontFamily: 'serif',
                }}
              >
                "Hoy mi corazón se llena de gratitud al celebrar el inicio de este nuevo camino. Doy gracias a Dios por
                la bendición de la vida y por el amor de mi familia. Es un honor para mí invitarlos a compartir la magia
                de mis XV años."
              </p>
            </div>
          </div>

          <div className="row" style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="col-md-7 text-center">
              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(10px)',
                  padding: '60px 40px',
                  borderRadius: '40px 10px 40px 10px',
                  boxShadow: '0 25px 50px -12px rgba(133, 94, 94, 0.2)',
                  border: '1px solid rgba(255, 255, 255, 0.4)',
                  position: 'relative',
                }}
              >
                <div className="item" style={{ marginBottom: '35px', position: 'relative', display: 'inline-block' }}>
                  {/* --- BRILLITOS EXTERNOS --- */}
                  {/* Brillito 1 - Superior Izquierda */}
                  <span
                    style={{
                      position: 'absolute',
                      top: '-10px',
                      left: '20px',
                      fontSize: '25px',
                      color: '#B58D56',
                      zIndex: 3,
                      textShadow: '0 0 10px rgba(181, 141, 86, 0.5)',
                    }}
                  >
                    ✨
                  </span>

                  {/* Brillito 2 - Superior Derecha */}
                  <span
                    style={{
                      position: 'absolute',
                      top: '15px',
                      right: '-5px',
                      fontSize: '18px',
                      color: '#B58D56',
                      zIndex: 3,
                      opacity: 0.8,
                    }}
                  >
                    ✦
                  </span>

                  {/* Brillito 3 - Inferior Derecha */}
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '20px',
                      right: '5px',
                      fontSize: '22px',
                      color: '#B58D56',
                      zIndex: 3,
                    }}
                  >
                    ✨
                  </span>

                  {/* --- CONTENEDOR DEL MONOGRAMA --- */}
                  <div
                    style={{
                      margin: '0 auto',
                      borderRadius: '50%',
                      width: '160px',
                      height: '160px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#fff',
                      border: '2px solid #B58D56',
                      outline: '8px solid #fdf2f2',
                      boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
                      position: 'relative',
                      zIndex: 2,
                    }}
                  >
                    {/* Brillito interno sutil sobre las letras */}
                    <span
                      style={{
                        position: 'absolute',
                        top: '45px',
                        right: '45px',
                        fontSize: '12px',
                        color: '#B58D56',
                        opacity: 0.6,
                      }}
                    >
                      ✦
                    </span>

                    <span
                      style={{
                        fontSize: '65px',
                        color: '#855E5E',
                        fontFamily: "'Great Vibes', cursive",
                        marginTop: '-5px',
                        textShadow: '1px 1px 0px rgba(255,255,255,1)', // Para que resalte más
                      }}
                    >
                      Sj
                    </span>
                  </div>

                  {/* Brillito 4 - Inferior Izquierda fuera del círculo */}
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '10px',
                      left: '0px',
                      fontSize: '15px',
                      color: '#B58D56',
                      zIndex: 3,
                      opacity: 0.7,
                    }}
                  >
                    ✦
                  </span>
                </div>

                <div className="desc-quinceanera">
                  <h3
                    className="main-font"
                    style={{
                      fontSize: '3.8rem',
                      color: '#855E5E',
                      marginBottom: '5px',
                      lineHeight: '1.1',
                    }}
                  >
                    Scarlet Joseline <br />
                    <span style={{ fontSize: '2.8rem', opacity: 0.9 }}>Hernández Florio</span>
                  </h3>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '30px 0',
                    }}
                  >
                    <div style={{ width: '30px', height: '1px', background: '#B58D56' }}></div>
                    <span style={{ margin: '0 15px', color: '#B58D56', fontSize: '1.2rem' }}>✦</span>
                    <div style={{ width: '30px', height: '1px', background: '#B58D56' }}></div>
                  </div>

                  <p className="parent-name" style={{ color: '#855E5E', fontSize: '1.2rem', lineHeight: '1.8' }}>
                    <span
                      style={{
                        display: 'block',
                        marginBottom: '15px',
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        fontSize: '0.9rem',
                        color: '#B58D56',
                        fontWeight: 'bold',
                      }}
                    >
                      En compañia de mi familia y mis seres queridos
                    </span>
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