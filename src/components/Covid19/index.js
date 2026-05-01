import React from 'react';

function CovidSection() {
  // --- CONFIGURACIÓN DE COLORES ---
  const colorDorado = '#B58D56';
  const colorCafeOscuro = '#5D4037';
  const colorCafeSuave = '#8B6B4A';

  // --- ICONOS SVG INTEGRADOS (Para evitar que fallen los enlaces externos) ---
  const IconDress = (
    <svg
      width="60"
      height="60"
      viewBox="0 0 24 24"
      fill="none"
      stroke={colorDorado}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 3h12l3 6-9 2-9-2 3-6Z" />
      <path d="M12 11v10" />
      <path d="m5 21 2-10" />
      <path d="m19 21-2-10" />
    </svg>
  );
  const IconPase = (
    <svg
      width="60"
      height="60"
      viewBox="0 0 24 24"
      fill="none"
      stroke={colorDorado}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <line x1="7" y1="14" x2="7.01" y2="14" />
      <line x1="11" y1="14" x2="11.01" y2="14" />
    </svg>
  );
  const IconSobre = (
    <svg
      width="60"
      height="60"
      viewBox="0 0 24 24"
      fill="none"
      stroke={colorDorado}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H17.5C20 5 22 7 22 9.5V17Z" />
      <path d="m2 9.5 10 6 10-6" />
    </svg>
  );
  const IconReloj = (
    <svg
      width="60"
      height="60"
      viewBox="0 0 24 24"
      fill="none"
      stroke={colorDorado}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );

  // --- ESTILOS ---
  const cardStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: '40px 20px',
    borderRadius: '30px 5px',
    textAlign: 'center',
    boxShadow: '0 10px 30px rgba(139, 107, 74, 0.1)',
    border: `1px solid rgba(181, 141, 86, 0.2)`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
  };

  const titleStyle = {
    display: 'block',
    color: colorDorado,
    fontSize: '0.9rem',
    fontWeight: 'bold',
    letterSpacing: '2px',
    marginBottom: '10px',
    textTransform: 'uppercase',
  };

  const descriptionStyle = {
    color: colorCafeOscuro,
    fontSize: '1.05rem',
    lineHeight: '1.5',
    margin: 0,
    fontFamily: 'serif',
  };

  return (
    <div
      id="fh5co-couple"
      style={{
        padding: '100px 0',
        backgroundColor: '#ffffff',
        backgroundImage: 'linear-gradient(to bottom, #fffaf5 0%, #ffffff 100%)',
        position: 'relative',
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <h2
              className="main-font"
              style={{ color: colorCafeSuave, fontSize: '5.5rem', margin: '0', fontWeight: 'normal' }}
            >
              Detalles importantes
            </h2>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '40px 0' }}>
              <div
                style={{
                  width: '100px',
                  height: '1px',
                  background: `linear-gradient(to right, transparent, ${colorDorado}, transparent)`,
                }}
              ></div>
              <span style={{ margin: '0 20px', color: colorDorado, fontSize: '1.5rem', opacity: 0.7 }}>✦</span>
              <div
                style={{
                  width: '100px',
                  height: '1px',
                  background: `linear-gradient(to left, transparent, ${colorDorado}, transparent)`,
                }}
              ></div>
            </div>

            <p
              style={{
                color: colorCafeOscuro,
                fontSize: '2.25rem',
                fontStyle: 'italic',
                fontFamily: 'serif',
                maxWidth: '700px',
                margin: '0 auto 60px auto',
                lineHeight: '1.4',
              }}
            >
              "Para que compartamos este día de la mejor manera, te agradecemos tener en cuenta estos detalles:"
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '30px' }}>
              <div style={cardStyle}>
                <div style={{ marginBottom: '20px' }}>{IconDress}</div>
                <div style={descriptionStyle}>
                  <span style={titleStyle}>Código de Vestimenta</span>
                  <strong>Formal / colores oscuros</strong>
                </div>
              </div>

              <div style={cardStyle}>
                <div style={{ marginBottom: '20px' }}>{IconPase}</div>
                <div style={descriptionStyle}>
                  <span style={titleStyle}>Recepción</span>
                  Tu pase es personal según los lugares indicados.
                </div>
              </div>

              <div style={cardStyle}>
                <div style={{ marginBottom: '20px' }}>{IconSobre}</div>
                <div style={descriptionStyle}>
                  <span style={titleStyle}>Lluvia de Sobres</span>
                  Tu detalle en efectivo será bienvenido en la entrada.
                </div>
              </div>

              <div style={cardStyle}>
                <div style={{ marginBottom: '20px' }}>{IconReloj}</div>
                <div style={descriptionStyle}>
                  <span style={titleStyle}>Puntualidad</span>
                  Te agradecemos llegar a tiempo para no perderte ningún momento.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CovidSection;
