import React from 'react';
import Img from 'gatsby-image';
import { isNull } from 'lodash';

const PortfolioItem = ({ item }) => {
  if (isNull(item.image)) {
    return null;
  }
  return (
    <div className="isotope-item col-sm-6 col-md-4 col-lg-3 fashion">
      <div className="vertical-item gallery-item content-absolute text-center">
        <div className="item-media">
          <Img
            sizes={item.image.sizes}
            alt={item.image.title}
            title={item.image.title}
            backgroundColor="#f1f1f1"
          />
          <div className="media-links">
            <div className="links-wrap">
              <a
                className="p-view prettyPhoto "
                title={item.title}
                data-gal="prettyPhoto[gal]"
                href={item.image.sizes.src}
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
};

export default PortfolioItem;
