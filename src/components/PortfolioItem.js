import React from 'react';

const PortfolioItem = ({ item }) => (
  <div className="isotope-item col-sm-6 col-md-4 col-lg-3 fashion">
    <div className="vertical-item gallery-item content-absolute text-center">
      <div className="item-media">
        <img src={item.image.file.url} alt={item.title} />
        <div className="media-links">
          <div className="links-wrap">
            <a
              className="p-view prettyPhoto "
              title={item.title}
              data-gal="prettyPhoto[gal]"
              href={item.image.file.url}
            />
          </div>
        </div>
      </div>
      <div className="item-content theme_background">
        <h4 className="item-meta">
          <a href="#">{item.title}</a>
        </h4>
      </div>
    </div>
  </div>
);

export default PortfolioItem;
