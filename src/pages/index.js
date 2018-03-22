import React from 'react';

import PageHero from '../components/PageHero';
import HomeAbout from '../components/HomeAbout';
import HomePortfolio from '../components/HomePortfolio';
import HomeBookNow from '../components/HomeBookNow';

export default class HomePage extends React.Component {
  render() {
    const {
      contentfulHome: home,
      allContentfulPorfolio: portfolio,
    } = this.props.data;
    // console.log('portfolio', portfolio);

    return (
      <div>
        <PageHero title="Gleamish Beauty" subTitle="Suman Klair" />
        <HomeAbout home={home} />
        <HomePortfolio portfolio={portfolio.edges} />
        <HomeBookNow />
      </div>
    );
  }
}

export const HomePageQuery = graphql`
  query HomePageQuery {
    contentfulHome {
      aboutText {
        childMarkdownRemark {
          html
        }
      }
      aboutImage {
        file {
          url
        }
      }
    }
    allContentfulPorfolio {
      edges {
        node {
          id
          title
          image {
            file {
              url
            }
          }
        }
      }
    }
  }
`;
