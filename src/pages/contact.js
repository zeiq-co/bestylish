import React from 'react';

import PageHero from '../components/PageHero';
import HomeBookNow from '../components/HomeBookNow';
import ContactForm from '../components/ContactForm';

export default class ContactPage extends React.Component {
  render() {
    const { contentfulHome: home } = this.props.data;
    // console.log('home', home);

    return (
      <div>
        <PageHero title="Contact Us" subTitle="Talk" />
        <section className="ls section_padding_110">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-5" data-animation="scaleAppear">
                <h3 className="widget-title2 entry-title">Contact Us</h3>

                <p>Contact us now for enquiries !</p>

                <div className="contacts-media-list topmargin_30">
                  <div className="media">
                    <div className="media-left">
                      <p className="josefin text-uppercase bold">Phone</p>
                    </div>
                    <div className="media-body">{home.telephone}</div>
                  </div>
                  <div className="media">
                    <div className="media-left">
                      <p className="josefin text-uppercase bold">E-mail</p>
                    </div>
                    <div className="media-body">{home.email}</div>
                  </div>
                  <div className="media">
                    <div className="media-left">
                      <p className="josefin text-uppercase bold">Address</p>
                    </div>
                    <div className="media-body">{home.location}</div>
                  </div>
                  <div className="media">
                    <div className="media-left">
                      <p className="josefin text-uppercase bold">Follow Us</p>
                    </div>
                    <div className="media-body">
                      <div className="post-social greylinks">
                        <a
                          href={home.facebook}
                          target="_blank"
                          className="social-icon soc-facebook"
                        />
                        <a
                          href={home.twitter}
                          target="_blank"
                          className="social-icon soc-twitter"
                        />
                        <a
                          href={home.instagram}
                          target="_blank"
                          className="social-icon soc-instagram"
                        />
                        <a
                          href={home.pinterest}
                          target="_blank"
                          className="social-icon soc-youtube"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-offset-1 col-md-6"
                data-animation="scaleAppear"
              >
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
        <HomeBookNow />
      </div>
    );
  }
}

export const ContactPageQuery = graphql`
  query ContactPageQuery {
    contentfulHome {
      email
      telephone
      location
      facebook
      twitter
      instagram
      pinterest
    }
  }
`;
