import React from 'react';

import PageHero from '../components/PageHero';
import HomeBookNow from '../components/HomeBookNow';

export default class ContactPage extends React.Component {
  render() {
    return (
      <div>
        <PageHero />
        <section className="ls section_padding_110">
          <div className="container">
            <div className="row">
              <div
                className="col-md-6 col-lg-5 to_animate"
                data-animation="scaleAppear"
              >
                <h3 className="widget-title2 entry-title">Contact Us</h3>

                <p>
                  Quisque blandit tellus risus, nec suscipit diam gravida vitae.
                  Donec eget cursus urna. Vivamus ut erat sed leo elementum
                  eleifend.
                </p>

                <div className="contacts-media-list topmargin_30">
                  <div className="media">
                    <div className="media-left">
                      <p className="josefin text-uppercase bold">Phone</p>
                    </div>
                    <div className="media-body">8 (800) 456-2698</div>
                  </div>
                  <div className="media">
                    <div className="media-left">
                      <p className="josefin text-uppercase bold">E-mail</p>
                    </div>
                    <div className="media-body">agency@support.com</div>
                  </div>
                  <div className="media">
                    <div className="media-left">
                      <p className="josefin text-uppercase bold">Address</p>
                    </div>
                    <div className="media-body">
                      Jacksons Street 567, San Diego, California, United St
                    </div>
                  </div>
                  <div className="media">
                    <div className="media-left">
                      <p className="josefin text-uppercase bold">Follow Us</p>
                    </div>
                    <div className="media-body">
                      <div className="post-social greylinks">
                        <a href="#" className="social-icon soc-facebook" />
                        <a href="#" className="social-icon soc-twitter" />
                        <a href="#" className="social-icon soc-google" />
                        <a href="#" className="social-icon soc-instagram" />
                        <a href="#" className="social-icon soc-pinterest" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-offset-1 col-md-6 to_animate" data-animation="scaleAppear">

                <form className="contact-form row columns_margin_0" method="post" action="/">

                  <div className="col-sm-12">
                    <div className="contact-form-name bottommargin_20">
                      <label htmlFor="name">Full Name
                        <span className="required">*</span>
                      </label>
                      <input type="text" aria-required="true" size="30" value="" name="name" id="name" className="form-control" placeholder="Enter your Name"/>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="contact-form-email bottommargin_20">
                      <label htmlFor="email">Email address
                        <span className="required">*</span>
                      </label>
                      <input type="email" aria-required="true" size="30" value="" name="email" id="email" className="form-control" placeholder="Enter your E-mail"/>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="contact-form-message bottommargin_20">
                      <label htmlFor="message">Message</label>
                      <textarea aria-required="true" rows="7" cols="45" name="message" id="message" className="form-control" placeholder="Message"></textarea>
                    </div>
                  </div>

                  <div className="col-sm-12">

                    <div className="contact-form-submit topmargin_10">
                      <button type="submit" id="contact_form_submit" name="contact_submit" className="theme_button">Contact Us</button>
                    </div>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </section>
        <HomeBookNow />
      </div>
    );
  }
};
