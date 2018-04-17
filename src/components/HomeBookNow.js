import React from 'react';
import Link from 'gatsby-link';

const HomeBookNow = () => (
  <section className="cs section_padding_110 page_banner parallax">
    <div className="container">
      <div className="row topmargin_30 bottommargin_30">
        <div className="col-sm-12 text-center">
          <p className="margin_0 fontsize_40 josefin bold grey text-uppercase">
            Book your appointment today
          </p>
          <p className="fontsize_30 josefin thin grey text-uppercase topmargin_5 bottommargin_50">
            Contact for more details and offers available.
          </p>
          <Link to="/contact" className="theme_button margin_0">
            Book now
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default HomeBookNow;
