import React from 'react';
import Link from 'gatsby-link';

import PortfolioItem from './PortfolioItem';

const HomePortfolio = ({ portfolio }) => (
  <section className="ls ms columns_margin_0 columns_padding_0 page_portfolio">
    <div className="container-fluid">
      <div
        className="isotope_container isotope row masonry-layout"
        data-filters=".isotope_filters"
      >
        <div className="isotope-item col-xs-6 col-md-4 col-lg-3 text-center fashion studio session">
          <div className="vertical-item content-absolute vertical-center portfolio-filters">
            <div className="item-media">
              <img src="./images/models_square/01.jpg" alt="" />
            </div>
            <div className="item-content">
              <div className="display_table">
                <div className="display_table_cell text-left">
                  <div className="heading bottommargin_35">
                    <p className="text-uppercase josefin grey fontsize_20">
                      Portfolio
                    </p>
                    <h2 className="section_header topmargin_5 bottommargin_0">
                      Our beautiful works
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="isotope-item col-xs-6 col-md-4 col-lg-3 text-center fashion studio session">
          <div className="vertical-item content-absolute vertical-center portfolio-filters">
            <div className="item-media">
              <img src="./images/models_square/01.jpg" alt="" />
            </div>
          </div>
        </div>
        {portfolio.map(({ node }) => (
          <PortfolioItem key={node.id} item={node} />
        ))}
        <div className="isotope-item col-sm-6 col-md-4 col-lg-3 fashion studio session">
          <div className="vertical-item portfolio-load-more content-absolute vertical-center text-center">
            <div className="item-media">
              <img src="./images/models_square/01.jpg" alt="" />
            </div>
            <div className="item-content">
              <div className="display_table">
                <div className="display_table_cell darklinks">
                  <Link to="/portfolio" className="theme_link fontsize_20">
                    Load more works
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HomePortfolio;
