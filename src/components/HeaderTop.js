import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const Logo = styled(Link)`
  font-size: 2rem;
  font-weight: 800;
`;

const Image = styled.img`
  width: 210px;
  height: 100px;
`;

const HeaderTop = ({ home }) => (
  <section className="page_toplogo table_section table_section_md ls">
    <div className="container">
      <div className="row">
        <div className="col-sm-8 text-center text-md-left">
          <Logo to="/" className="logo">
            <Image src="/images/bestylish.jpg" alt="" />
            {/* <span>BE STYLISH SALON</span> */}
          </Logo>
          <span className="toggle_menu">
            <span />
          </span>
        </div>

        <div className="col-sm-4 text-center text-md-right">
          <div className="display_table">
            <div className="display_table_cell">
              <a href={home.twitter} target="_blank" className="social-icon soc-twitter" />
              <a href={home.facebook} target="_blank" className="social-icon soc-facebook" />
              <a href={home.instagram} target="_blank" className="social-icon soc-instagram" />
              <a href={home.pinterest} target="_blank" className="social-icon soc-pinterest" />
            </div>

            <div className="display_table_cell">
              <span className="logo-meta">
                <strong className="grey">{home.telephone}</strong>
                <br /> {home.email}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeaderTop;
