import React from 'react';
import PageHero from '../components/PageHero';
import HomeBookNow from '../components/HomeBookNow';
import ServicesItem from '../components/ServicesItem';

export default class ServicesPage extends React.Component {
  render() {
    const { allContentfulServiceCategory: ServiceCategory } = this.props.data;
    // console.log('services', services);

    return (
      <div>
        <PageHero title="Services" subTitle="Price list" />
        <section className="ls section_padding_50">
          <div className="container">
            <div className="row">
              {ServiceCategory.edges.map(({ node }) => (
                <ServicesItem key={node.id} item={node} />
              ))}
            </div>
          </div>
        </section>
        <HomeBookNow />
      </div>
    );
  }
}

export const ServicesPageQuery = graphql`
  query ServicesPageQuery {
    allContentfulServiceCategory {
      edges {
        node {
          title
          listIteam
          price
        }
      }
    }
  }
`;
