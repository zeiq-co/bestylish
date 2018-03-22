import React from 'react';

import PageHero from '../components/PageHero';
import HomeAbout from '../components/HomeAbout';
import HomePortfolio from '../components/HomePortfolio';
import HomeBookNow from '../components/HomeBookNow';

export default class IndexPage extends React.Component {
  render() {
    return (
      <div>
        <PageHero />
        <HomeAbout />
        <HomePortfolio />
        <HomeBookNow />
      </div>
    );
  }
}
