import React from 'react';

const HeaderTop = () => (
  <section className="page_toplogo table_section table_section_md ls">
    <div className="container">
      <div className="row">
        <div className="col-sm-8 text-center text-md-left">
          <a href="./" className="logo">
            <img src="images/logo.png" alt="" />
          </a>
          <span className="toggle_menu">
            <span />
          </span>
        </div>

        <div className="col-sm-4 text-center text-md-right">
          <div className="display_table">
            <div className="display_table_cell">
              <a href="#" className="social-icon soc-twitter" />
              <a href="#" className="social-icon soc-facebook" />
              <a href="#" className="social-icon soc-google" />
            </div>

            <div className="display_table_cell">
              <span className="logo-meta">
                <strong className="grey">8(800)168-2159</strong>
                <br /> support@company.com
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeaderTop;
