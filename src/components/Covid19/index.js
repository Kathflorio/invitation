import React from 'react';
import SectionBox from './SectionBox';

function CovidSection() {
  // Iconos seleccionados para que armonicen con el estilo elegante
  const IconDress = "https://cdn-icons-png.flaticon.com/512/3534/3534312.png"; 
  const IconPase = "https://cdn-icons-png.flaticon.com/512/7517/7517618.png";  
  const IconSobre = "https://cdn-icons-png.flaticon.com/512/9446/9446547.png";  
  const IconReloj = "https://cdn-icons-png.flaticon.com/512/4305/4305432.png";  

  return (
    <div id="fh5co-couple" style={{ 
      padding: '100px 0', 
      backgroundColor: '#ffffff',
      backgroundImage: 'linear-gradient(to bottom, #fffaf5 0%, #ffffff 100%)', // Invertimos el degradado para conectar secciones
      position: 'relative'
    }}>
      
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
            {/* Título coherente con el resto de la invitación */}
        <h4 className="sub-title" style={{ 
    color: '#B58D56', 
    fontSize: '1.6rem', 
    letterSpacing: '5px', // Más espacio aquí para "distender"
    textTransform: 'uppercase',
    marginBottom: '15px' 
  }}>
    PROTOCOLOS Y
  </h4>
  
  <h2 className="main-font" style={{ 
    color: '#8B6B4A', 
    fontSize: '5.5rem', // Un poco más grande para que destaque
    margin: '0', 
    fontWeight: 'normal' 
  }}>
    Detalles importantes
  </h2>

            {/* Divisor de diamant/}
            {/* Divisor más largo para ocupar más espacio horizontal */}
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '40px 0' }}>
    <div style={{ width: '100px', height: '1px', background: 'linear-gradient(to right, transparent, #B58D56, transparent)' }}></div>
    <span style={{ margin: '0 20px', color: '#B58D56', fontSize: '1.5rem', opacity: 0.7 }}>✦</span>
    <div style={{ width: '100px', height: '1px', background: 'linear-gradient(to left, transparent, #B58D56, transparent)' }}></div>
  </div>

            <p className="info" style={{ 
              color: '#5D4037', 
              fontSize: '2.3rem', 
              fontStyle: 'italic',
              fontFamily: 'serif',
              maxWidth: '600px',
              margin: '0 auto 50px auto'
            }}>
              "Para que compartamos este día de la mejor manera, te agradecemos tener en cuenta estos detalles:"
            </p>
          </div>
        </div>
        
        <div className="row">
          <div className="col-md-12">
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
              gap: '25px',
              padding: '10px'
            }}>
                {/* Nota: Si SectionBox no permite estilos externos, 
                   asegúrate de que dentro de SectionBox el texto sea color #5D4037
                */}
                <div style={cardStyle}>
                   <img src={IconDress} alt="Dress code" style={iconStyle} />
                   <p style={textStyle}><strong>CÓDIGO DE VESTIMENTA</strong><br/>Formal / Elegante</p>
                </div>

                <div style={cardStyle}>
                   <img src={IconPase} alt="Pases" style={iconStyle} />
                   <p style={textStyle}><strong>RECEPCIÓN</strong><br/>Tu pase es personal según los lugares indicados.</p>
                </div>

                <div style={cardStyle}>
                   <img src={IconSobre} alt="Sobres" style={iconStyle} />
                   <p style={textStyle}><strong>LLUVIA DE SOBRES</strong><br/>Tu detalle en efectivo será bienvenido en la entrada.</p>
                </div>

                <div style={cardStyle}>
                   <img src={IconReloj} alt="Reloj" style={iconStyle} />
                   <p style={textStyle}><strong>PUNTUALIDAD</strong><br/>Te agradecemos llegar a tiempo para no perderte ningún momento.</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Estilos de objetos para mantener el código limpio
const cardStyle = {
  backgroundColor: '#ffffff',
  padding: '35px 20px',
  borderRadius: '30px 5px', // Bordes asimétricos estilo Josseline
  textAlign: 'center',
  boxShadow: '0 10px 30px rgba(139, 107, 74, 0.08)',
  border: '1px solid rgba(181, 141, 86, 0.15)',
  transition: 'transform 0.3s ease'
};

const iconStyle = {
  width: '60px',
  height: '60px',
  marginBottom: '20px',
  opacity: 0.8
};

const textStyle = {
  color: '#5D4037',
  fontSize: '1.05rem',
  lineHeight: '1.5',
  margin: 0
};

export default CovidSection;