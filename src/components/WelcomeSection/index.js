import React, { Fragment, useState } from 'react';
import { object, string, bool, func } from 'prop-types';
import { Link } from 'gatsby';
import confetti from 'canvas-confetti';

// Importaciones de tus archivos
import ImagenFondo from '@assets/images/image-fondo.jpg'; 
import { GOOGLE_CALENDAR_LINK } from '@/constants';
import CountContainer from './CountContainer';
import ScrollToDown from './ScrollToDown';
import { styWrapper, styHero, styBackground, styButtonWrapper } from './styles';

const DELAY_TIME = 1500;

function WelcomeSection({ location, guestName, isInvitation, isAnonymGuest, codeLink, onClickDetail }) {
  const [loading, setLoading] = useState(false);
  const [alreadyDownloadData, setAlreadyDownloadData] = useState(false);

  // --- ESTILOS VISUALES PERSONALIZADOS ---
  const heroCustomStyle = {
    backgroundImage: `url(${ImagenFondo})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    position: 'relative',
  };

  const overlayStyle = {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,240,245,0.6) 100%)',
    zIndex: 1
  };

  // --- LÓGICA DE COMPORTAMIENTO ---
  const handleScrollTo = () => {
    const element = document.getElementById('fh5co-couple');
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  };

  const handleShowDetail = () => {
    if (loading) return undefined;

    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) return clearInterval(interval);

      const particleCount = 50 * (timeLeft / duration);
      
      confetti({
        ...defaults, particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#FFB7B2', '#FFDAC1', '#ffffff']
      });
      confetti({
        ...defaults, particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#FFB7B2', '#FFDAC1', '#ffffff']
      });
    }, 250);

    try {
      const myAudio = document.getElementById('myAudio');
      if (myAudio) myAudio.play();
    } catch {
      console.error('FAILED_TO_PLAY_MUSIC');
    }

    onClickDetail();

    if (!alreadyDownloadData) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setAlreadyDownloadData(true);
        handleScrollTo();
      }, DELAY_TIME);
    } else {
      handleScrollTo();
    }
  };

  const renderGuestSection = () => {
    if (isAnonymGuest) return (
  <div style={{ marginTop: '20px' }}>
    <h4 className="sub-title" style={{ 
      fontSize: '2.5rem', 
      color: '#B58D56', 
      marginBottom: '-10px' 
    }}>
      ¡Bienvenidos!
    </h4>
    <h2 className="to-dearest-name" style={{ 
      color: '#8B6B4A', 
      fontSize: '2.8rem', 
      fontWeight: 'bold',
      letterSpacing: '1px'
    }}>
      Familia y Amigos
    </h2>
  </div>
);
    return (
      <Fragment>
        <h3 className="to-dearest" style={{ color: '#8B6B4A', fontSize: '1.3rem' }}>Acompáñanos a celebrar a</h3>
        <h2 className="to-dearest-name" style={{ color: '#8B6B4A', fontWeight: 'bold' }}>{guestName}</h2>
      </Fragment>
    );
  };

  return (
    <div css={styHero} style={heroCustomStyle}>
      {/* Aplicamos el overlay para que el texto luzca como en tu diseño de acuarela */}
      <div style={overlayStyle} />

      <header
        id="fh5co-header"
        role="banner"
        className="fh5co-cover"
        css={styBackground}
        style={{ background: 'transparent', position: 'relative', zIndex: 2 }}
      >
        <div className="container">
          <div className="row" css={styWrapper}>
            <div className="col-md-8 col-md-offset-2 text-center">
              
              {/* Estética de tipografía conservada */}
              <h4 className="sub-title" style={{ fontSize: '4.2rem', color: '#B58D56' }}>Mis xv años</h4>
              <h1 className="title" style={{ color: '#8B6B4A' }}>Josseline Scarlet</h1>

              <div className={isAnonymGuest ? 'margin__bottom' : ''}>
                <CountContainer />
              </div>

              {/* Botón Agendar */}
              <div className="row" css={styButtonWrapper} style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="col-md-3">
                  <a href={GOOGLE_CALENDAR_LINK} title="Agendar" target="_blank" rel="noreferrer">
                    <button className="btn btn-default btn-block" style={{ borderRadius: '50px' }}>Agendar evento</button>
                  </a>
                </div>
              </div>
              
              <br />
              {renderGuestSection()}

              {/* Botón Pase (si aplica) */}
              {isInvitation && (
                <div className="row" css={styButtonWrapper} style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                  <div className="col-md-3">
                    <Link to={`/e-ticket?${codeLink}`}>
                      <button className="btn btn-default btn-block" style={{ borderRadius: '50px' }}>Ver mi pase</button>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          <br />
        
          <div className="row">
            <ScrollToDown loading={loading} onClick={handleShowDetail} />
          </div>
        </div>
      </header>
    </div>
  );
}

WelcomeSection.propTypes = {
  guestName: string.isRequired,
  isInvitation: bool.isRequired,
  isAnonymGuest: bool.isRequired,
  location: object.isRequired,
  codeLink: string,
  onClickDetail: func.isRequired,
};

WelcomeSection.defaultProps = {
  codeLink: '',
};

export default WelcomeSection;