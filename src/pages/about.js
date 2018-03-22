import React from 'react';

import PageHero from '../components/PageHero';
import HomeBookNow from '../components/HomeBookNow';

export default class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <PageHero />
        <section className="ls section_padding_top_110 columns_margin_0 image-overflow">
          <div className="container">
            <div className="row">
              <div className="col-md-offset-1 col-md-10 col-lg-offset-0 col-lg-6">
                <div className="heading bottommargin_40">
                  <p className="text-uppercase josefin grey fontsize_20">
                    History
                  </p>
                  <h2 className="section_header topmargin_5 bottommargin_0">
                    About our agency
                  </h2>
                </div>
                <p>
                  Aliquam eu enim tincidunt, auctor velit sit amet, auctor
                  sapien. Aenean iaculis posuere dolor in vulputate. Nunc
                  fermentum lobortis odio. Ut libero magna, aliquam in eget,
                  iaculis sit amet neque. Sed eget viverra metus, nec facilisis
                  quam. Nunc id ex erat. Aliquam congue purus libero, nec
                  gravida nisi rutrum iaculis.
                </p>
                <ul className="list2 leftmargin_50 topmargin_30">
                  <li>
                    Vestibulum eget elit sed elit pulvinar tempor nec sed ipsum;
                  </li>
                  <li>Duis sit amet laoreet orci, vitae convallis ante;</li>
                  <li>
                    Aliquam non nulla volutpat, venenatis enim et, venenatis
                    est.;
                  </li>
                  <li>
                    Mauris consequat, neque ac pharetra mattis, orci diam
                    malesuada purus;
                  </li>
                  <li>Aliquam pharetra in eros sit amet cursus. </li>
                </ul>
              </div>
              <div
                className="col-md-offset-1 col-md-10 col-lg-offset-0 col-lg-6 text-center text-lg-right to_animate"
                data-animation="fadeInRight"
              >
                <img
                  src="./images/model1.png"
                  alt=""
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
