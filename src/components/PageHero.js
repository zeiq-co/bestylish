import React from 'react';

class PageHero extends React.Component {
  componentDidMount() {
    const $breadcrumbs = jQuery('.theme_breadcrumbs');
    if ($breadcrumbs.length) {
      const rand = Math.floor(Math.random() * (7 - 1)) + 1;
      const bgimagePath = `url('./images/parallax/breadcrumbs${  rand  }.jpg')`;
      $breadcrumbs.attr('style', `background-image: ${  bgimagePath}`);
    }
  }

  render() {
    const { title, subTitle } = this.props;
    return (
      <section className="page_breadcrumbs ls ms theme_breadcrumbs parallax section_padding_bottom_15 section_padding_top_75">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <div className="heading text-center bottom_border">
                <p className="text-uppercase josefin grey fontsize_20">
                  {subTitle}
                </p>
                <h1 className="section_header topmargin_5">{title}</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default PageHero;
