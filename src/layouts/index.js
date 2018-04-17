import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import config from '../config/index';
import './index.css';
import HeaderTop from '../components/HeaderTop';
import Header from '../components/Header';
import FooterTop from '../components/FooterTop';
import Footer from '../components/Footer';

const Container = styled.div``;

const IndexLayout = ({ children, data }) => {
  const { contentfulHome: home } = data;

  return (
    <div>
      <Helmet
        title={config.siteName}
        meta={[{ name: 'description', content: config.description }]}
      />
      <div id="canvas">
        <Container id="box_wrapper">
          {home && <HeaderTop home={home} />}
          <Header />
          {children()}
          {home && <FooterTop home={home} />}
          <Footer />
        </Container>
      </div>
    </div>
  );
};

IndexLayout.defaultProps = {
  data: {},
};

IndexLayout.propTypes = {
  children: PropTypes.func.isRequired,
};

export default IndexLayout;

export const IndexLayoutQuery = graphql`
  query IndexLayoutQuery {
    contentfulHome {
      email
      telephone
      facebook
      location
      twitter
      instagram
      pinterest
    }
  }
`;
