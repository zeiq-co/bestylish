import React from 'react';

const HomeAbout = ({ home }) => (
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
          <p>{home.aboutText.aboutText}</p>
        </div>
        <div
          className="col-md-offset-1 col-md-10 col-lg-offset-0 col-lg-6 text-center text-lg-right to_animate"
          data-animation="fadeInRight"
        >
          <img
            src={home.aboutImage.file.url}
            alt="about gleamish beauty"
            className="top-overlap-small right-offset"
          />
        </div>
      </div>
    </div>
  </section>
);

export default HomeAbout;
