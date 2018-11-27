import React from 'react';

import PageHero from '../components/PageHero';
import HomeAbout from '../components/HomeAbout';
import HomePortfolio from '../components/HomePortfolio';
import HomeBookNow from '../components/HomeBookNow';

export default class HomePage extends React.Component {
  render() {
    if (!this.props.data) {
      return null;
    }

    const {
      contentfulHome: home,
      allContentfulPortfolio: portfolio,
    } = this.props.data;
    // console.log('portfolio', portfolio);

    return (
      <div>
        <PageHero title="Be Stylish Salon" subTitle="Rajveer Makeover" />
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
    allContentfulPortfolio {
      edges {
        node {
          id
          title
          image {
            title
            description
            sizes(maxWidth: 690) {
              ...GatsbyContentfulSizes
            }
          }
        }
      }
    }
  }
`;
