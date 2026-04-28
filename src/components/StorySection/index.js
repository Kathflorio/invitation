import React, { Fragment } from 'react';

import StoryItem from './StoryItem';
import { stories } from './stories-data';

function StorySection() {
  const renderStories = () => {
    return stories.map((s, index) => <StoryItem key={index} {...s} isInverted={index % 2 === 1} />);
  };

  return (
    <Fragment>
      <div id="fh5co-couple-story" style={{ backgroundColor: '#fffcfc', padding: '70px 0' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
              {/* Título Estilo Girly/Vintage */}
              <h2 className="main-font" style={{ color: '#855E5E', fontSize: '3.5rem' }}>Mis Momentos</h2>
              <p className="sub-title" style={{ color: '#FFB7B2', fontStyle: 'italic', fontWeight: 'bold' }}>
                Un viaje a través de mis años
              </p>
              <p className="sub-title" style={{ color: '#828282', fontSize: '0.9rem' }}>
                Cada paso me ha traído hasta este día tan especial
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-md-offset-0">
              <ul className="timeline animate-box">
                {renderStories()}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default StorySection;