import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import WeddingInfoBox from './WeddingInfoBox';
import { styWrapper } from './styles';

function WeddingSection({ isInvitation }) {
  return (
    <Fragment>
      <div id="fh5co-event" css={styWrapper}>
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2 className="main-font main-font__wedding" style={{ fontSize: '3.5rem', marginTop: '20px' }}>
                Misa de acción de gracias y Recepción
              </h2>
              <span className="sub-title sub-title__wedding" style={{ color: '#ffffff', opacity: 0.9 }}>
                Con la bendición de Dios y mis padres, celebraré mis XV años el:
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              {/* Bloque de la Misa / Ceremonia Religiosa */}
              <WeddingInfoBox
                title="Misa de acción de gracias"
                time="19:00 Horas"
                date="Viernes, 22 de Mayo 2026"
                description="Iglesia Santa Cruz, Av. C.T.M 3, 77510 Cancún, Q.R."
              />
              
              {/* Bloque de la Recepción / Fiesta */}
              <WeddingInfoBox
                title="Recepción"
                time="21:00 Horas"
                date="Sábado, 23 de Mayo 2026"
                description="Salón de eventos Gelem, Av. Lak'in 44-01, PRIVADA SAN ANDRES, 77539 Cancún, Q.R."
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

WeddingSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default React.memo(WeddingSection);