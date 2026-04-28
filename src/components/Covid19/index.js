import React from 'react';
import SectionBox from './SectionBox';

function CovidSection() {
  /**
   * ICONOS COLOR ROSA PASTEL / GRILY VINTAGE
   * Estas URLs apuntan directamente a iconos que tienen tonos rosados.
   */
  const IconDress = "https://cdn-icons-png.flaticon.com/512/3534/3534312.png"; // Vestido Rosa
  const IconPase = "https://cdn-icons-png.flaticon.com/512/7517/7517618.png";  // Ticket Rosa Pastel
  const IconSobre = "https://cdn-icons-png.flaticon.com/512/9446/9446547.png";  // Sobre con Corazón Rosa
  const IconReloj = "https://cdn-icons-png.flaticon.com/512/4305/4305432.png";  // Reloj Rosa suave

  return (
    <div id="fh5co-couple" style={{ padding: '80px 0', backgroundColor: '#fffcfc' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <h2 className="main-font" style={{ color: '#855E5E', fontSize: '3.8rem' }}>
                Detalles Importantes
            </h2>
            <p className="info" style={{ color: '#5D4037', fontSize: '1.2rem', marginBottom: '40px', fontStyle: 'italic' }}>
              Para que compartamos este día de la mejor manera, te pedimos tener en cuenta lo siguiente:
            </p>
          </div>
        </div>
        
        <div className="row">
          <div className="col-md-10 col-md-offset-1">
            {/* El estilo 'filter' ayuda a que los iconos se vean más rosados/suaves si su color base es muy fuerte */}
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              justifyContent: 'center',
              filter: 'sepia(0.3) hue-rotate(310deg) brightness(1.1)' 
            }}>
                <SectionBox 
                  icon={IconDress} 
                  text="Código de vestimenta: Formal / Elegante." 
                />
                <SectionBox 
                  icon={IconPase} 
                  text="Tu pase es personal según los lugares indicados en tu invitación." 
                />
                <SectionBox 
                  icon={IconSobre} 
                  text="Lluvia de sobres: Tu detalle en efectivo será bienvenido en la entrada." 
                />
                <SectionBox 
                  icon={IconReloj} 
                  text="Te agradecemos ser puntual para disfrutar juntos cada momento." 
                />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CovidSection;