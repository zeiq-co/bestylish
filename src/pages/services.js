import React from 'react';

import PageHero from '../components/PageHero';
import HomeBookNow from '../components/HomeBookNow';
import ServicesItem from '../components/ServicesItem';

export default class ServicesPage extends React.Component {
  render() {
    return (
      <div>
        <PageHero />
        <section className="ls section_padding_50">
          <div className="container">
            <div className="row">
              <ServicesItem />
              <ServicesItem />
              <ServicesItem />
              <ServicesItem />
            </div>
          </div>
        </section>
        <HomeBookNow />
      </div>
    );
  }
}
