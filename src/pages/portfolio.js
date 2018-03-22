import React from 'react';

import PageHero from '../components/PageHero';
import HomeBookNow from '../components/HomeBookNow';
import PortfolioItem from '../components/PortfolioItem';

export default class GalleryPage extends React.Component {
  render() {
    return (
      <div>
        <PageHero />
        <section className="ls ms columns_margin_0 columns_padding_0 page_portfolio">
          <div className="container-fluid">
            <div
              className="isotope_container isotope row masonry-layout"
              data-filters=".isotope_filters"
            >
              <PortfolioItem />
              <PortfolioItem />
              <PortfolioItem />
              <PortfolioItem />
              <PortfolioItem />
              <PortfolioItem />
            </div>
          </div>
        </section>
        <HomeBookNow />
      </div>
    );
  }
}
