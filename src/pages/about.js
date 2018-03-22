import React from 'react';

import PageHero from '../components/PageHero';
import HomeBookNow from '../components/HomeBookNow';

export default class AboutPage extends React.Component {
  render() {
    const { contentfulAbout: about } = this.props.data;
    // console.log('about', about);
    return (
      <div>
        <PageHero title="About" subTitle="Info" />
        <section className="ls section_padding_top_110 columns_margin_0 image-overflow">
          <div className="container">
            <div className="row">
              <div className="col-md-offset-1 col-md-10 col-lg-offset-0 col-lg-6">
                <div className="heading bottommargin_40">
                  <p className="text-uppercase josefin grey fontsize_20" />
                  <h2 className="section_header topmargin_5 bottommargin_0">
                    About us
                  </h2>
                </div>
                <p>{about.details.details}</p>
              </div>
              <div
                className="col-md-offset-1 col-md-10 col-lg-offset-0 col-lg-6 text-center text-lg-right to_animate"
                data-animation="fadeInRight"
              >
                <img
                  src={about.image.file.url}
                  alt="about us"
                  className="top-overlap-small right-offset"
                />
              </div>
            </div>
          </div>
        </section>
        <HomeBookNow />
      </div>
    );
  }
}

export const AboutPageQuery = graphql`
  query AboutPageQuery {
    contentfulAbout {
      details {
        details
      }
      image {
        file {
          url
        }
      }
    }
  }
`;
