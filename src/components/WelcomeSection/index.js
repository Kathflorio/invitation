import React, { Fragment, useState } from 'react';
import { object, string, bool, func } from 'prop-types';
import { Link } from 'gatsby';
import confetti from 'canvas-confetti';

import { GOOGLE_CALENDAR_LINK } from '@/constants';
import CountContainer from './CountContainer';
import ScrollToDown from './ScrollToDown';
import { styWrapper, styHero, styBackground, styButtonWrapper } from './styles';

const DELAY_TIME = 1500;

function WelcomeSection({ location, guestName, isInvitation, isAnonymGuest, codeLink, onClickDetail }) {
  const [loading, setLoading] = useState(false);
  const [alreadyDownloadData, setAlreadyDownloadData] = useState(false);

  const handleScrollTo = () => {
    /** scroll into detail view */
    const element = document.getElementById('fh5co-couple');
    element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  };

  const handleShowDetail = () => {
  if (loading) return undefined;

  // 2. Definimos la lluvia de sobres/confeti
  const duration = 3 * 1000; // Duración de 3 segundos
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  const randomInRange = (min, max) => Math.random() * (max - min) + min;

  const interval = setInterval(function() {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);
    
    // Lanzamos "confeti" que parecen sobres o pétalos
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      colors: ['#FFB7B2', '#FFDAC1', '#ffffff'] // Colores melón, crema y blanco
    });
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      colors: ['#FFB7B2', '#FFDAC1', '#ffffff']
    });
  }, 250);

  // 3. El resto de tu lógica original
  try {
    const myAudio = document.getElementById('myAudio');
    myAudio.play();
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
    if (isAnonymGuest) return <h2 className="to-dearest-name">¡Hola, familia y amigos!</h2>;

    return (
      <Fragment>
        <h3 className="to-dearest">Acompañanos a celebrar a</h3>
        <h2 className="to-dearest-name">{guestName}</h2>
      </Fragment>
    );
  };

  return (
    <div css={styHero}>
      <header
        id="fh5co-header"
        role="banner"
        className="fh5co-cover"
        css={styBackground}
      >
        {/* Sin div overlay para que no se vea oscuro */}
        <div className="container">
          <div className="row" css={styWrapper}>
            <div className="col-md-8 col-md-offset-2 text-center">
              
              {/* Usamos las clases originales para conservar la tipografía cursiva */}
              <h4 className="sub-title" style={{ fontSize: '4.2rem' }}>Mis xv años</h4>
              <h1 className="title">Josesline Scarlet</h1>

              <div className={isAnonymGuest ? 'margin__bottom' : ''}>
                <CountContainer />
              </div>

              <div className="row" css={styButtonWrapper}>
                  <div className="col-md-3">
                    <a href={GOOGLE_CALENDAR_LINK} title="Agendar" target="_blank" rel="noreferrer">
                      <button className="btn btn-default btn-block">Agendar evento</button>
                    </a>
                  </div>
              </div>
              
              <br></br>
              {renderGuestSection()}

              {isInvitation && (
                <div className="row" css={styButtonWrapper}>
                  <div className="col-md-3">
                    <Link to={`/e-ticket?${codeLink}`}>
                      <button className="btn btn-default btn-block">Ver mi pase</button>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
          <br></br>
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