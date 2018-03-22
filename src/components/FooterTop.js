import React from 'react';

const FooterTop = () => (
  <footer className="page_footer ds ms bg_image section_padding_50">
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-sm-6 to_animate">
          <div className="widget_text">
            <h3 className="widget-title">Why Us?</h3>
            <p>
              Consetetur sadipscing elitr, sed dinonumy eirmod tempor ut labore
              edolore magna aliquyam erat, sed diam voluptua. At vero eos et
              accusam et justo duo dolores et ea rebum stet clita kasd
              gubergren.
            </p>
          </div>
        </div>

        <div className="col-md-4 col-sm-6 to_animate">
          <div className="widget_text">
            <h3 className="widget-title">Contact Us</h3>
            <p>
              PO Box 54321 Some str. 765, Los Angeles, California, United States
            </p>
            <div className="border-paragraphs">
              <p>
                <i className="rt-icon2-device-phone highlight" /> +12 345 678
                9123
              </p>
              <p>
                <i className="rt-icon2-globe-outline highlight" />
                <a href="./">www.company.com</a>
              </p>
              <p>
                <i className="rt-icon2-mail2 highlight" />
                <a href="mailto:info@company.com">info@company.com</a>
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-sm-6 to_animate">
          <div className="widget_text">
            <h3 className="widget-title">Stay Connected</h3>
            <div className="media">
              <div className="media-left media-middle">
                <a
                  href="#"
                  className="social-icon color-icon bg-icon soc-facebook"
                />
              </div>
              <div className="media-body media-middle">Facebook</div>
            </div>
            <div className="media">
              <div className="media-left media-middle">
                <a
                  href="#"
                  className="social-icon color-icon bg-icon soc-twitter"
                />
              </div>
              <div className="media-body media-middle">Twitter</div>
            </div>
            <div className="media">
              <div className="media-left media-middle">
                <a
                  href="#"
                  className="social-icon color-icon bg-icon soc-pinterest"
                />
              </div>
              <div className="media-body media-middle">Pinterest</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default FooterTop;
