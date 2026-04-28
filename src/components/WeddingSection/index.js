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
                Ceremonia y Recepción
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
                title="Ceremonia Religiosa"
                time="16:00 Horas"
                date="Sábado, 23 de Mayo 2026"
                description="[Nombre de la Iglesia o Parroquia], [Dirección de la Iglesia]"
              />
              
              {/* Bloque de la Recepción / Fiesta */}
              <WeddingInfoBox
                title="Recepción"
                time="19:00 Horas"
                date="Sábado, 23 de Mayo 2026"
                description="[Nombre del Salón o Jardín], [Dirección del evento]"
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