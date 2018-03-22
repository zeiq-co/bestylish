import React from 'react';

const PortfolioItem = () => (
  <div className="isotope-item col-sm-6 col-md-4 col-lg-3 fashion">
    <div className="vertical-item gallery-item content-absolute text-center">
      <div className="item-media">
        <img src="./images/models_square/03.jpg" alt="" />
        <div className="media-links">
          <div className="links-wrap">
            <a
              className="p-view prettyPhoto "
              title=""
              data-gal="prettyPhoto[gal]"
              href="./images/models_square/03.jpg"
            />
            <a className="p-link" title="" href="gallery-single.html" />
          </div>
        </div>
      </div>
      <div className="item-content theme_background">
        <h4 className="item-meta">
          <a href="model-single.html">Jean Waters</a>
        </h4>
      </div>
    </div>
  </div>
);

export default PortfolioItem;
