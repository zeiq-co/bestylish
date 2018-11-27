import React from 'react';

import PageHero from '../components/PageHero';
import HomeBookNow from '../components/HomeBookNow';
import PortfolioItem from '../components/PortfolioItem';

export default class PortfolioPage extends React.Component {
  render() {
    const { allContentfulPortfolio: portfolio } = this.props.data;

    return (
      <div>
        <PageHero title="Portfolio" subTitle="Our Work" />
        <section className="ls ms columns_margin_0 columns_padding_0 page_portfolio">
          <div className="container-fluid">
            <div
              className="isotope_container isotope row masonry-layout"
              data-filters=".isotope_filters"
            >
              {portfolio.edges.map(({ node }) => (
                <PortfolioItem key={node.id} item={node} />
              ))}
            </div>
          </div>
        </section>
        <HomeBookNow />
      </div>
    );
  }
}

export const PortfolioPageQuery = graphql`
  query PortfolioPageQuery {
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
